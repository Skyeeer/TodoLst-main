window.addEventListener('DOMContentLoaded', (event) => {
    const addButton = document.getElementById('addTask') as HTMLButtonElement;
    const todoInput = document.getElementById('task') as HTMLInputElement;
    const todoList = document.getElementById('toDoList') as HTMLUListElement;

    const addTask = () => {
        const taskValue = todoInput.value.trim();
        if (!taskValue) {
            alert("Please enter a task!");
            return;
        }

        const card = document.createElement('div');
        card.className = 'card';
        // card.id = uniqueId();

        const checkBox = document.createElement('input');
        checkBox.className = 'check';
        checkBox.type = 'checkbox';

        const todoTitle = document.createElement('p');
        todoTitle.className = 'todoTitle';
        todoTitle.textContent = taskValue;

        const trashCan = document.createElement('img');
        trashCan.src = "remove.png";
        trashCan.className = 'trashCan'
        trashCan.width = 30;
        trashCan.height = 30;
        trashCan.addEventListener('click', function () {
            card.remove();
        });

        card.appendChild(checkBox);
        card.appendChild(todoTitle);
        card.appendChild(trashCan);

        todoList.appendChild(card);
    }

    addButton.addEventListener('click', addTask);

    todoInput.addEventListener('keypress', (e) => {
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