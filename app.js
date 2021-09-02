const fullName = prompt("Введите ваше имя и фамилию!");
const age = confirm("Вам есть 18 лет?");

if (age) {
  alert("Добро пожаловать " + fullName + " вот ваши сигареты");
} else {
  alert("Извините, " + fullName + " Вам нет 18 лет!");
}
