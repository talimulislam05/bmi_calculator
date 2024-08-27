let weight = document.getElementById('weight');
let height = document.getElementById('height');
let calculate = document.getElementById('calculate');
let reset = document.getElementById('reset');
let result = document.getElementById('result');
let category = document.getElementById('category');

calculate.addEventListener('click', function () {
  let meter = height.value * 0.3048;
  let squareMeter = meter ** 2;
  let bmi = (weight.value / squareMeter).toFixed(2);
  result.textContent = ` Your BMI is ${bmi}`;
  if (weight.value === '' || height.value === '') {
    category.textContent = '';
    result.textContent = `⛔ Provide height & weight`;
  } else if (bmi < 18.5) {
    category.textContent = `You'r underweight 😔`;
  } else if (bmi >= 18.5 && bmi <= 24.99) {
    category.textContent = `Your BMI is normal 😍`;
  } else if (bmi > 25 && bmi < 29.99) {
    category.textContent = `You'r over Weight! 😓`;
  } else if (bmi > 30) {
    category.textContent = `You'r Obese! 😔`;
  }
});
reset.addEventListener('click', function () {
  height.value = '';
  weight.value = '';
  category.textContent = '';
  result.textContent = '';
});
