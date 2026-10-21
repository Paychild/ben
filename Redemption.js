let taskbar = {
    construct: function() {
        this.selectElements();
        this.bindEvents();
    },
    
    selectElements: function() {
        this.taskInput = document.getElementById("input-task");
        this.taskList = document.getElementById("task");
        this.taskListChildren = this.taskList.children;
        this.addButton = document.getElementById("add-btn");
        this.errorMessage = document.getElementById("error");
    },

    buildTask: function() {
        let taskListItem, taskCheckbox, taskValue, taskButton, taskTrash;
        
        taskListItem = document.createElement("li");
        taskListItem.setAttribute("class", "task");

        taskCheckbox = document.createElement("input");
        taskCheckbox.setAttribute("type", "checkbox");
        
        // Bind event directly to the new checkbox
        taskCheckbox.onclick = this.completeTask.bind(this, taskListItem, taskCheckbox);

        taskValue = document.createTextNode(this.taskInput.value);

        taskButton = document.createElement("button");

        taskTrash = document.createElement("i");
        taskTrash.setAttribute("class", "bi bi-trash3");
        
        taskButton.appendChild(taskTrash);
        
        // Bind event directly to the new delete button
        taskButton.onclick = this.deleteTask.bind(this, taskListItem);

        taskListItem.appendChild(taskCheckbox);
        taskListItem.appendChild(taskValue);
        taskListItem.appendChild(taskButton);

        this.taskList.appendChild(taskListItem);
    },

    error: function() {
        this.errorMessage.style.display = "block";
    },

    addTask: function() {
        let taskValue = this.taskInput.value.trim();
        this.errorMessage.style.display = "none";
        
        if (taskValue === "") {
            this.error();
        } else {
            this.buildTask();
            this.taskInput.value = "";
        }
    },

    enterKey: function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            this.addTask();
        }
    },

    bindEvents: function() {
        this.addButton.onclick = this.addTask.bind(this);
        this.taskInput.onkeypress = this.enterKey.bind(this);
    },

    deleteTask: function(taskListItem) {
        taskListItem.remove();
    },

    completeTask: function(taskListItem, checkBox) {
        if (checkBox.checked) {
            taskListItem.className = "task completed";
        } else {
            this.incompleteTask(taskListItem);
        }
    },

    incompleteTask: function(taskListItem) {
        taskListItem.className = "task";
    }
};

// Initialize the taskbar when your script runs
// taskbar.construct();