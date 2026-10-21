const inputTask = document.querySelector("#task-input");
const addTaskBtn = document.querySelector("#taskBtn");
const taskList = document.querySelector("#task-list");

//Add a task
addTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const taskText = inputTask.value.trim();
    if (taskText === "") return;
     taskInput.value = "";
})

function createTaskElement(taskText) {
 const li = document.createElement("li");
}

const checkbox = document.createElement("input");
checkbox.type = "checkbox";

const taskSpan = document.createElement("span");
taskSpan.textContent = text;

checkbox.addEventListener("change",function (){
    if (checkbox.checked) {
        span.classList.add("completed");
    } else {
        span.classList.remove("completed");
    }
});

li.appendChild(checkbox);
li.appendChild(taskSpan);
taskList.appendChild(li);
