let addTaskBtn = document.querySelector(".add-task");
let taskInput = document.querySelector("input.task-title");
let taskWrapper = document.querySelector(".tasks .list-group");
let deleteTaskBtn = document.querySelector(".delete");
if (localStorage.getItem("tasks") == null) {
    localStorage.setItem("tasks", "[]");
}
let tasks = JSON.parse(localStorage.getItem("tasks"));
taskInput.addEventListener("keypress", function (e) {
    if (e.keyCode == 13) {
        addTaskBtn.click();
    }
})

addTaskBtn.addEventListener("click", AddTask)

function AddTask() {

    if (taskInput.value.trim() !== "") {
        tasks.push(taskInput.value);
        let newTaskElem = "<li class='list-group-item'>" + taskInput.value + " Task Date:" + Date(taskInput) + "</li>"
        taskWrapper.innerHTML = newTaskElem + taskWrapper.innerHTML;
        taskInput.value = "";
        localStorage.setItem("Tasks", JSON.stringify(tasks))
    }
    else {
        alert("Can't add an empty task!");
    }
}


deleteTaskBtn.addEventListener("click", () => {
    document.querySelectorAll(".list-group-item").forEach(e => {
        e.remove();
    })
})