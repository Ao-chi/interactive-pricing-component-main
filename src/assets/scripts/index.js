const inputRange = document.querySelector("#billRange");
const price = document.querySelector("#price");
const checkBox = document.querySelector("#billing");
const views = document.querySelector(".card__views");
const yearlyBill = document.querySelector("#time");
const form = document.querySelector("#formComp");

// preload design
window.addEventListener("load", (event) => {
    const a = inputRange.value * 1;
    price.innerHTML = `$${a.toFixed(2)}`;
    const value = a;
    const backgroundColor = `linear-gradient(to right, #a5f3eb, 0%, #a5f3eb, ${value}%, #eaeefb ${value}%, #eaeefb 100%)`;
    inputRange.style.background = backgroundColor;
    views.innerHTML = `${a * 2.5 + "K"}`;
});

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

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // inputRangeValue();
    console.log(price.innerHTML);
});
inputRange.addEventListener("input", inputRangeValue);
checkBox.addEventListener("change", checkboxChange);
