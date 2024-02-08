window.addEventListener('DOMContentLoaded', function (event) {
    var addButton = document.getElementById('addTask');
    var todoInput = document.getElementById('task');
    var todoList = document.getElementById('toDoList');
    var addTask = function () {
        var taskValue = todoInput.value.trim();
        if (!taskValue) {
            alert("Please enter a task!");
            return;
        }
        var card = document.createElement('div');
        card.className = 'card';
        // card.id = uniqueId();
        var checkBox = document.createElement('input');
        checkBox.className = 'check';
        checkBox.type = 'checkbox';
        var todoTitle = document.createElement('p');
        todoTitle.className = 'todoTitle';
        todoTitle.textContent = taskValue;
        var trashCan = document.createElement('img');
        trashCan.src = "remove.png";
        trashCan.className = 'trashCan';
        trashCan.width = 30;
        trashCan.height = 30;
        trashCan.addEventListener('click', function () {
            card.remove();
        });
        card.appendChild(checkBox);
        card.appendChild(todoTitle);
        card.appendChild(trashCan);
        todoList.appendChild(card);
    };
    addButton.addEventListener('click', addTask);
    todoInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
// function uniqueId(): string {
//     const timestamp = Date.now();
//     const randomComponent = Math.floor(Math.random() * 99999) + 1
//     const uniqueId = `${timestamp}${randomComponent.toString().padStart(5, '0')}`;
//     return uniqueId;
// };
//HONESTLY REDO HELA JÄVLA SKITEN
