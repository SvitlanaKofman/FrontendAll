// Задание. У нас есть разметка для To-Do листа (списка дел). Нужно запрограммировать ему функциональность. Минимальный набор: 1. При нажатии на кнопку “Создать” добавляется новое задание. 2. При нажитии на дело - оно меняет свой статус с выполенного и наоборот с соотсветсвующим изменением стилизации (примеры дел есть в разметке). 3. Кнопки “Все“, “Выполенные” и “Невыполенные” фильтруют задачи чтобы отображались соответвенно все, выполенные или не выполенные.
const btnCreate = document.querySelector(".btn");
const input = document.querySelector(".task-input");
const list = document.querySelector(".list");
const listItem = document.querySelector(".list-item");
const btnAll = document.querySelector("#all");
const btnCompleted = document.querySelector("#completed");
const btnUncompleted = document.querySelector("#uncompleted");
// // Очищает содержимое списка при загрузке
// document.addEventListener("DOMContentLoaded", () => {
//   list.innerHTML = "";
// });
btnCreate.addEventListener("click", createNewTask);
function createNewTask() {
  if (input.value === "") {
    showAlert();
    return;
  }
  const li = document.createElement("li");
  li.classList.add("list-item");
  li.textContent = input.value;
  list.append(li);
  input.value = "";
  li.addEventListener("click", changesStatusHandler);
}
listItem.addEventListener("click", changesStatusHandler);
function showAlert() {
  const alert = document.createElement("span");
  alert.innerText = `Заполните поле`;
  alert.classList = "alert";
  alert.style.color = "red";
  document.querySelector(".actions").after(alert);
  setTimeout(() => {
    alert.remove();
  }, 20000);
}
function changesStatusHandler(event) {
  if (event.target.classList.contains("list-item")) {
    event.target.classList.toggle("list-item_done");
  }
}
btnAll.addEventListener("click", allTaskHandler);
btnCompleted.addEventListener("click", completedTaskHandler);
btnUncompleted.addEventListener("click", uncompletedTaskHandler);
function allTaskHandler() {
  const items = document.querySelectorAll(".list-item");
  items.forEach((item) => (item.style.display = "flex"));
}
function completedTaskHandler() {
  const items = document.querySelectorAll(".list-item");
  items.forEach((item) => {
    if (item.classList.contains("list-item_done")) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}
function uncompletedTaskHandler() {
  const items = document.querySelectorAll(".list-item");
  items.forEach((item) => {
    item.style.display = !item.classList.contains("list-item_done")
      ? "flex"
      : "none";
  });
}