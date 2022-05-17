let addTaskBtn = document.querySelector(".add-task");
let taskInput = document.querySelector("input.task-title");
let taskWrapper = document.querySelector(".tasks .list-group");
let deleteBtn = document.querySelector(".delete-btn")

addTaskBtn.addEventListener("click",Save);
deleteBtn.addEventListener("click",Delete)

function Save() {
    if (taskInput.value.trim() !== "") {
        let newTaskElem = "<li class='list-group-item'>" + taskInput.value + "</li>";
        taskWrapper.innerHTML = newTaskElem + taskWrapper.innerHTML;
        taskInput.value = "";
    }
    else{
        alert("Cant add an empty task!");
    }
}

function Delete() {
    taskWrapper.innerHTML="";
}

document.addEventListener("keyup",function (e) {
    if(e.keyCode == 13){
        Save();
    }
});

