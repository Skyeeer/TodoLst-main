"use strict";
const inputField = document.getElementById('task');
const addBtn = document.getElementById('addTask');
const toDoList = document.getElementById('toDoList');
if (addBtn && inputField && toDoList) {
    addBtn.addEventListener('click', () => {
        var _a;
        const toDoValue = inputField.value.trim();
        if (toDoValue !== '') {
            const toDoCard = `<li class="list-Item"> <div class="card"><input class="check" type="checkbox">
                <p class="todoTitle">${toDoValue}</p> <img src="remove.png" class="trashCan" width="30"
                    height="30">
            </div>
            </li>`;
            const newToDo = document.createElement('li');
            newToDo.innerHTML = toDoCard;
            inputField.value = '';
            (_a = newToDo.querySelector('.trashCan')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
                const listItem = this.closest('li');
                if (listItem !== null) {
                    listItem.remove();
                }
            });
        }
        else {
            alert('Please enter a to-do item.');
        }
    });
}
