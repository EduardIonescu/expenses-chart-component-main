// Redraw svg on window resize
window.addEventListener("resize", drawSvg);

// Could use something to get the actual day but w/e
const presentDay = "wed";

// Fetch data
async function getData() {
	let url = "./data.json";

	try {
		let res = await fetch(url).then((res) => res.json());

		return res;
	} catch (error) {
		console.log(error);
	}
}

// Draw the SVG
async function drawSvg() {
	const data = await getData();

	const windowWidth = window.innerWidth;

	let width;
	let textInnerPadding;
	// Responsive
	if (windowWidth >= 540) {
		width = 460;
		textInnerPadding = 12;
	} else {
		width = 305;
		textInnerPadding = 5;
	}

	const svg = d3.select("svg").attr("width", width),
		margin = 20,
		height = svg.attr("height") - margin;

	const tooltip = d3
		.select("body")
		.append("div")
		.attr("class", "d3-tooltip")
		.style("position", "absolute")
		.style("z-index", "10")
		.style("visibility", "hidden")
		.text("a simple tooltip");

	const xScale = d3
			.scaleBand()
			.range([0, width])
			.paddingInner(0.27)
			.round(true)
			.domain(data.map((d) => d.day)),
		yScale = d3
			.scaleLinear()
			.range([height, 0])
			.domain([0, 25 + d3.max(data.map((d) => d.amount))]);

	// Removes all g elements on redraw so they don't overlap
	svg.selectAll("g").remove();
	const g = svg.append("g").attr("transform", `translate(${0}, ${0})`);

	g.selectAll(".bar")
		.data(data)
		.enter()
		.append("rect")
		.attr("class", "bar")
		.attr("id", (d) => d.day)
		.attr("data-amount", (d) => d.amount)
		//.attr("x", (d, i) => i * 68)
		.attr("x", (d) => xScale(d.day))
		.attr("y", (d) => yScale(d.amount))
		//.attr("width", 50)
		.attr("width", xScale.bandwidth())
		.attr("height", (d) => height - yScale(d.amount))
		.attr("fill", (d) =>
			d.day == presentDay
				? "var(--primary-cyan)"
				: "var(--primary-soft-red)"
		);

	if (windowWidth >= 540) {
		g.selectAll("rect")
			.attr("rx", 6)
			.on("mouseover", handleMouseOver)
			.on("mouseout", handleMouseOut);
	} else {
		g.selectAll("rect").attr("rx", 3);
	}

	g.selectAll("text")
		.data(data)
		.enter()
		.append("text")
		.text((d) => d.day)
		.attr("class", "label-bar")
		.attr("x", (d) => xScale(d.day) + textInnerPadding)
		.attr("y", height + 20)
		.style("fill", "var(--medium-brown)");

	function handleMouseOver() {
		const rect = this.getBoundingClientRect();
		const y = rect.top;
		const x = rect.left;
		const amount = this.dataset.amount;
		tooltip
			.style("top", y - 48 + "px")
			.style("left", x - 12 + "px")
			.html(`$${amount}`)
			.style("visibility", "visible");
		d3.select(this).style("opacity", "0.5");
	}
	function handleMouseOut() {
		tooltip.html(``).style("visibility", "hidden");
		d3.select(this).style("opacity", "1");
	}
}
drawSvg();
