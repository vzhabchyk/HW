const firstName = prompt("Введите ваше имя.");
const lastName = prompt("Введите вашу фамилию.")
const age = confirm("Вам есть 18 лет?");

if (age) {
  alert("Добро пожаловать, " + firstName + " " + lastName + ", вот ваши сигареты");
} else {
  alert("Извините, " + firstName + " " + lastName + ", Вам нет 18 лет!");
}
