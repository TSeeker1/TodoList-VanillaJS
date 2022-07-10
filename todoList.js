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
   li.textContent = " " + value;
   li.classList.add("forLi");

   // * add li to the list
   todoOl.append(li);

   // *creating delete button
   let btn = createCertainDeleteBtn();

   // * craeting complete button
   let completeTaskBtn = createComleteTaskBtn();

   // * adding buttons
   li.append(btn);
   li.append(completeTaskBtn);
}

// * принять название для задачи
function todoApp() {
   let str = input.value.trim();
   if (str.length == 0) return;

   addList(str);

   input.value = "";
}

function keyPressed(event) {
   if (event.key === "Enter") {
      event.preventDefault();
      submit.click();
   }
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
   btn.addEventListener("click", clearTask);

   return btn;
}

// * creating complete task button
function createComleteTaskBtn() {
   let input = document.createElement("input");
   input.type = "checkbox";
   input.classList.add("completeBtn");

   // * checks if checkbox is pressed or not
   input.addEventListener("click", function (event) {
      let target = event.target;
      let li = target.closest("li");

      if (input.checked == true) {
         li.classList.add("completed");
      } else {
         li.classList.remove("completed");
      }
   });

   return input;
}

//* отдельная кнопка для очиски
function clearTask(event) {
   let li = event.target.closest("li");

   if (!todoOl.contains(li)) return;

   li.remove();
}

submit.addEventListener("click", todoApp);
input.addEventListener("keydown", keyPressed);
clear.addEventListener("click", clearList);

showNum.addEventListener("click", toggleNum);
