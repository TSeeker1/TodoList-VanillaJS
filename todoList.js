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
}

function todoApp() {
   let str = input.value.trim();
   if (str.length == 0) return;

   addList(str);

   input.value = "";
}

function clearList() {
   todoOl.innerHTML = "";
}

function toggleNum() {
   if (todoOl.style.listStyle == "none") {
      todoOl.style.listStyle = "decimal inside";
   } else {
      todoOl.style.listStyle = "none";
   }
}

submit.addEventListener("click", todoApp);
clear.addEventListener("click", clearList);

showNum.addEventListener("click", toggleNum);

// _________________________________________________
function showAlert() {
   alert(j);
}
