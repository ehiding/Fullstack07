const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const clearAllTask = document.getElementById("clearAllTask");
let tasks = [];

addButton.addEventListener("click", addTask);
taskList.addEventListener("click", handleTaskClick);
taskList.addEventListener("dragstart", handleDragStart);
taskList.addEventListener("dragover", handleDragOver);
taskList.addEventListener("drop", handleDrop);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    tasks.push(taskText);
    renderTasks();
    taskInput.value = "";
  } else {
    alert("Content is not empty!");
  }
}

function handleTaskClick(e) {
  if (e.target.classList.contains("remove")) {
    const taskItem = e.target.parentElement;
    const taskItem2 = taskItem.parentElement;
    const taskIndex = Array.from(taskList.children).indexOf(taskItem2);
    tasks.splice(taskIndex, 1);
    renderTasks();
  }
}

function handleDragStart(e) {
  const taskItem = e.target;
  const taskIndex = Array.from(taskList.children).indexOf(taskItem);
  e.dataTransfer.setData("text/plain", taskIndex);
}

function handleDragOver(e) {
  e.preventDefault();
}

function handleDrop(e) {
  const taskIndex = parseInt(e.dataTransfer.getData("text/plain"));
  const dropIndex = Array.from(taskList.children).indexOf(e.target);

  if (taskIndex !== dropIndex && dropIndex !== -1) {
    const [removedTask] = tasks.splice(taskIndex, 1);
    tasks.splice(dropIndex, 0, removedTask);
    renderTasks();
  }
}

function renderTasks() {
  taskList.innerHTML = ``;

  tasks.forEach((taskText, index) => {
    const taskItem = document.createElement("li");
    taskItem.textContent = `Bài: ${index + 1}: ${taskText}`;
    taskItem.draggable = true;
    taskItem.dataset.index = index;

    const removeButton = document.createElement("button");
    removeButton.innerHTML = `<i class="fa fa-trash remove"></i>`;
    removeButton.classList.add("remove");

    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);
  });

  if (taskList.innerHTML == "") {
    clearAllTask.style.display = "none";
  } else {
    clearAllTask.style.display = "block";
  }

  return taskList;
}

clearAllTask.addEventListener("click", function () {
  taskList.innerHTML = "";
  tasks = [];
  clearAllTask.style.display = "none";
});
