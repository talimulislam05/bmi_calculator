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
  if (bmi < 18) {
    category.textContent = `You'r Under weight 😔`;
  } else if (bmi > 18 && bmi < 24) {
    category.textContent = ` Your BMI is Normal 😍`;
  } else if (bmi > 24 && bmi < 30) {
    category.textContent = `You'r over Weight!`;
  } else if (bmi > 30) {
    category.textContent = `You'r Obese! 😔`;
  }
  console.log(bmi);
});
reset.addEventListener('click', function () {
  height.value = '';
  weight.value = '';
  category.textContent = '';
  result.textContent = '';
});
