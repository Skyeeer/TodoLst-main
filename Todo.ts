document.addEventListener('DOMContentLoaded', () => {
    loadTodos();
    ListVis();
    ClearAllEvent();
});

interface toDoItem {
    id: string;
    content: string;
    completed: boolean;
}

const inputField = document.getElementById('task') as HTMLInputElement;
const addBtn = document.getElementById('addTask') as HTMLInputElement;
const toDoList = document.getElementById('toDoList') as HTMLUListElement;
let todos: toDoItem[] = [];


if (addBtn && inputField && toDoList) {
    addBtn.addEventListener('click', () => {
        const toDoValue = inputField.value.trim();

        if (toDoValue !== '') {
            const todoId = generateId();
            const toDoCard = createTodoCard(toDoValue, todoId, false);
            toDoList.innerHTML += toDoCard;
            todos.push({ id: todoId, content: toDoValue, completed: false });
            saveTodos();
            inputField.value = '';
            ListVis();
        } else {
            alert('Please enter a to-do item.');
        }

        // ClearAll();
    });
    toDoList.addEventListener('click', function (event) {
        if ((event.target as HTMLElement).classList.contains('trashCan')) {
            const listItem = (event.target as HTMLElement).closest('li');
            if (listItem !== null) {
                const todoId = listItem.id;
                todos = todos.filter(todo => todo.id !== todoId);
                saveTodos();
                listItem.remove();
                ListVis();
            }
        }
    });

    toDoList.addEventListener('change', function (event) {
        const target = event.target as HTMLInputElement;
        if (target.classList.contains('check')) {
            const card = target.closest('.card');
            if (card) {
                const listItem = card.closest('li');
                const todoId = listItem?.id;
                const todo = todos.find(todo => todo.id === todoId);
                if (todo) {
                    todo.completed = target.checked;
                    saveTodos();
                }
                const text = card.querySelector('.todoTitle');
                if (text) {
                    text.classList.toggle('crossed-out', target.checked);
                }
            }
        }
    });

}
//Gömmer Clear All knappen
function ListVis() {
    const listContainer = document.querySelector('.List') as HTMLElement;
    if (listContainer) {
        listContainer.style.display = toDoList.children.length > 0 ? 'block' : 'none';
    }
}

//Tar bort alla Todos
function ClearAll() {
    const clearAllBtn = document.getElementById('clear') as HTMLButtonElement;

    if (clearAllBtn) {
        clearAllBtn.addEventListener('click', () => {
            toDoList.innerHTML = '';
            todos = [];
            ListVis();
        })
    }
}

function ClearAllEvent() {
    const clearAllBtn = document.getElementById('clear') as HTMLButtonElement;
    if (clearAllBtn) {
        clearAllBtn.addEventListener('click', ClearAll);
    }
}

function createTodoCard(toDoValue: string, todoId: string, completed: boolean): string {
    const crossedOut = completed ? 'crossed-out' : '';
    return `<li class="list-Item" id="${todoId}"> <div class="card"><input class="check" type="checkbox" ${completed ? 'checked' : ''}>
                <p contentEditable class="todoTitle ${crossedOut}">${toDoValue}</p> <img src="remove.png" class="trashCan" width="30"
                    height="30">
            </div>
            </li>`;
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function generateId() {
    const time = new Date().getTime();
    const random = Math.floor(Math.random() * 1000);
    return `${time}${random}`;
}

function loadTodos(): void {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        todos = JSON.parse(storedTodos);
        todos.forEach(todo => {
            const toDoCard = createTodoCard(todo.content, todo.id, todo.completed);
            toDoList.innerHTML += toDoCard;
        });
    }
}


document.addEventListener('DOMContentLoaded', ListVis);