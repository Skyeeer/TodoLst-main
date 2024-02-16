const inputField = document.getElementById('task') as HTMLInputElement;
const addBtn = document.getElementById('addTask') as HTMLInputElement;
const toDoList = document.getElementById('toDoList') as HTMLInputElement;

if (addBtn && inputField && toDoList) {
    addBtn.addEventListener('click', () => {
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
            newToDo.querySelector('.trashCan')?.addEventListener('click', function (this: HTMLImageElement) {
                const listItem = this.closest('li');
                if (listItem !== null) {
                    listItem.remove();
                }
            });
        } else {
            alert('Please enter a to-do item.');
        }


    });
}