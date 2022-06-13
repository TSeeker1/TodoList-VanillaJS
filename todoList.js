const todoOl = document.getElementById("todoOl");
const input = document.getElementById("input");
const submit = document.getElementById("submit");

const clear = document.getElementById("clearButton");

// * togglers
const showNum = document.getElementById("showNum");

// * adds li to the ul with value
function addList(value) {
   // * creating li element
   let li = document.createElement("li");
   li.innerHTML = " " + value;
   li.classList.add("forLi");

   // * add li to the list
   todoOl.append(li);

   // *creating delete button
   let btn = createCertainDeleteBtn();

   btn.addEventListener("click", clearTask);

   li.append(btn);
}

// * принять название для задачи
function todoApp() {
   let str = input.value.trim();
   if (str.length == 0) return;

   addList(str);

   input.value = "";
}

// * очистить список
function clearList() {
   todoOl.innerHTML = "";
}

// * включить цифры или нет
function toggleNum() {
   if (todoOl.style.listStyle == "none") {
      todoOl.style.listStyle = "decimal inside";
   } else {
      todoOl.style.listStyle = "none";
   }
}

// *creating delete certain button
function createCertainDeleteBtn() {
   let btn = document.createElement("button");
   btn.innerHTML = "X";
   btn.classList.add("deleteCertainBtn");

   return btn;
}

//* отдельная кнопка для очиски
function clearTask(event) {
   let li = event.target.closest("li");

   if (!todoOl.contains(li)) return;

   li.remove();
}

submit.addEventListener("click", todoApp);
clear.addEventListener("click", clearList);

showNum.addEventListener("click", toggleNum);
