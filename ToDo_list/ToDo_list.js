const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list_container");

function addtask() {
  if (inputBox.value === "") {
    alert("You must enter the task!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", list_container.innerHTML);
}

function showTask() {
  list_container.innerHTML = localStorage.getItem("data");
}

showTask();
