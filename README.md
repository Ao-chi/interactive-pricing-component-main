# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
-   [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the app depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Use the slider and toggle to see prices for different page view numbers

### Screenshot

![](./screenshots/desktop.png)

### Links

-   Solution URL: (https://github.com/Ao-chi/interactive-pricing-component-main.git)
-   Live Site URL: (https://interactive-pricing-component01.netlify.app/)

## My process

### Built with

-   Semantic HTML5 markup
-   SCSS
-   Flexbox
-   CSS Grid
-   Mobile-first workflow
-   Vanilla JS

### What I learned

I learned to use the input and change eventlisteners for checkbox and input slider.
The code below is what I used to geta nd update the pricing values.

```js
function inputRangeValue(e) {
    const value = e.target.value;
    const backgroundColor = `linear-gradient(to right, #a5f3eb, 0%, #a5f3eb, ${value}%, #eaeefb ${value}%, #eaeefb 100%)`;
    inputRange.style.background = backgroundColor;
    const total = `$${value + ".00"}`;
    price.innerHTML = total;
    views.innerHTML = `${value * 2.5 + "K"}`;
    checkboxChange();
}

function checkboxChange() {
    let currentValue = inputRange.value;
    const c = "/ yearly";
    const b = "/ monthly";
    if (checkBox.checked) {
        const yearlyPrice = inputRange.value * 12 * 0.75;
        price.innerHTML = `$${yearlyPrice.toFixed(2)}`;

        yearlyBill.innerHTML = c;
    } else {
        price.innerHTML = `$${currentValue + ".00"}`;
        yearlyBill.innerHTML = b;
    }
}

inputRange.addEventListener("input", inputRangeValue);
checkBox.addEventListener("change", checkboxChange);
```

## Author

-   Frontend Mentor - [@Ao-chi](https://www.frontendmentor.io/profile/Ao-chi)
