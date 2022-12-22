### Links

-   Live Site URL: [Click here to see webpage](https://eduardionescu.github.io/expenses-chart-component-main/)

# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt).

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   View the bar chart and hover over the individual bars to see the correct amounts for each day
-   See the current day’s bar highlighted in a different colour to the other bars
-   View the optimal layout for the content depending on their device’s screen size
-   See hover states for all interactive elements on the page
-   **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   Mobile-first workflow
-   D3
-   SVG
-   Fetch

### What I learned

I've learned to use some D3 in this project.

```js
// You can use these two if your datapoints are dates in order to evenly distribute them on the axis
const xScale = d3.scaleBand();
xScale.bandwidth();
```

### Continued development

D3 is really fun so I plan to further broaden my knowledge about it by building more fun projects and learn how to create a Heatmap and Scatterplots

### Useful resources

-   [Observable - D3 Scaleband](https://observablehq.com/@d3/d3-scaleband) - This helped me make the SVG responsive and made the whole code look way cleaner.
-   [freeCodeCamp - Data Visualization](freeCodeCamp.com) - Amazing tools to get you started with d3.

## Author

-   Website - [EduardIonescu](https://ionescueduard.netlify.app)
-   Frontend Mentor - [@EduardIonescu](https://www.frontendmentor.io/profile/EduardIonescu)
