let number = document.querySelector("#number");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");
let counter = 0;

number.innerHTML = counter;

function increase() {
    counter += 1;
    number.innerHTML = counter;
};

function decrease() {
    counter -= 1;
    number.innerHTML = counter;
};

function reset() {
    counter = 0;
    number.innerHTML = counter;
};

increaseBtn.addEventListener("click", increase);
decreaseBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);



   