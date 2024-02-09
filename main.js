const btn_copy = document.querySelector(".btn_copy");
const btn_gen_pass = document.querySelector(".btn_gen_pass");
const pass_container = document.querySelector(".pass_container");
const text_in_pass_coitainer = document.querySelector(
  ".text_in_pass_coitainer"
);
const slider_settings = document.querySelector(".slider_settings");

const input_numbers = document.querySelector(".input_numbers");
const input_symbols = document.querySelector(".input_symbols");

const btn_numbers = document.querySelector(".btn_numbers");
const btn_symbols = document.querySelector(".btn_symbols");

let is_btn_numbers = false;
let is_btn_symbols = false;

// Кнопка Скопировать
btn_copy.addEventListener("click", () => {
  copyText();
  addStyleActive();
});

// Кнопка Сгенерировать пароль
btn_gen_pass.addEventListener("click", () => {
  removeStyleActive();
  text_in_pass_coitainer.innerText = generationPassword();
});

// Добавление стиля при нажатии на кнопки Скопировать
function addStyleActive() {
  btn_copy.innerText = "Скопирован";
  btn_copy.classList.add("btn_copy_active");
  pass_container.classList.add("pass_container_active");
}

// Удаление стиля с кнопки Скопировать
function removeStyleActive() {
  btn_copy.classList.remove("btn_copy_active");
  pass_container.classList.remove("pass_container_active");

  btn_copy.innerText = "Скопировать";
  btn_copy.classList.add("btn_copy");
  pass_container.classList.add("pass_container");
}

// Логика копирования
function copyText() {
  let text = document.querySelector(".text_in_pass_coitainer").innerText;

  let input = document.createElement("input");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
}
// Логика генерации пароля
function generationPassword() {
  let numberChars = "0123456789";
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  let symbolChars = "!@#$%^&*()_+";

  // Базовый пароль без фильторов
  let allChars = upperChars + lowerChars;

  // Если выбран фильтр Цифры
  input_numbers.checked ? (allChars += numberChars) : null;

  // Если выбраны фильтры Цифры Символы
  input_numbers.checked && input_symbols.checked
    ? (allChars += numberChars += symbolChars)
    : null;

  // если выбран фильтр Символы
  input_symbols.checked ? (allChars += symbolChars) : null;

  let result = "";

  for (let i = 0; i < slider_setting(); i++) {
    let randomNumber = Math.floor(Math.random() * allChars.length);
    result += allChars[randomNumber];
    text_in_pass_coitainer.innerText = result;
  }

  return result;
}

text_in_pass_coitainer.innerText = generationPassword();

// Слайдер чисел
function slider_setting() {
  removeStyleActive();
  return (document.querySelector(".slider_value").innerText =
    slider_settings.value);
}

// Кнопка Цифры
btn_numbers.addEventListener("click", () => {
  if (!input_numbers.checked) {
    input_numbers.checked = true;
  } else {
    input_numbers.checked = false;
  }
  generationPassword();
});

// Кнопка Символы
btn_symbols.addEventListener("click", () => {
  if (!input_symbols.checked) {
    input_symbols.checked = true;
  } else {
    input_symbols.checked = false;
  }
  generationPassword();
});

slider_setting();
