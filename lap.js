const err = document.querySelector(".err");
const inputTask = document.getElementById("input-task");
const addTaskBtn = document.querySelector('#add-task');
const searchInput = document.getElementById ("#search");
const task_list = document.querySelector(".task-list");
const clearBtn = document.querySelector (".clear")

// add a task
addTaskBtn.addEventListener('click', (e) => {
e.preventDefault();

const taskText = inputTask.value.trim();

if (inputTask.value === "") {
const newLi = document.createElement("li");
newLi.className = "task";
const taskInput = document.createElement('input');
taskInput.type = "text";
taskInput.disabled = true;
taskInput.className = "disable-task"
taskInput.value = taskText; 
newLi.appendChild(taskInput);
const deleteBtn = document.createElement("button");
deleteBtn.innerText ="delete"; 
deleteBtn.className = "deleteBtn"
newLi.appendChild(deleteBtn);
const editBtn = document.createElement("button");
editBtn.innerText= "Edit";
editBtn.className = "editBtn";
newLi.appendChild(editBtn);
task_list.appendChild(newLi);
inputTask.value = "";}
else {
    err.style.display = "block";
}
});




// display all task

//delete a task

// mark  task as complete 

//show number of pending/complete task

//save task to localstorage