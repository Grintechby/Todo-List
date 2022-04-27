import {container, header, headerTop, deleteAll, deleteLast, inputTodo, addButton, 
    headerBottom, allText, completedText, showAll, showCompleted, inputSearch, main} from './layot.js';

let todos = [];
let todoList = [];
let date = new Date().toLocaleDateString();

//Подкидывает данные из local storage если они есть
if (localStorage.getItem('todos')) {
    todos = JSON.parse(localStorage.getItem('todos'));
    displayMessages();
    count();
}

//Добавляет карточку задачи при нажатии клавиши Enter
inputTodo.addEventListener('keydown', (event) => {
    let enterKey = event.key;
    if (enterKey == 'Enter') {
        return add();
    }
});

//Добавляет задачу при клике на кнопку 'Add'
addButton.addEventListener('click', add);

//Функция добавления задачи и данных в массив
function add () {
    if (inputTodo.value == '') return;
    let newTodo = {
        id: todoList.length,
        date: date,
        text: inputTodo.value,
        isChecked: false
    };

    todos.push(newTodo);
    displayMessages();
    localStorage.setItem('todos', JSON.stringify(todos));
    inputTodo.value = '';
    count();
}

//Функция создает карточку задачи
function displayMessages() {
    let displayMessage = '';
    if (todos.length == 0) main.innerHTML = '';
    todos.forEach(function (item, index) {
        displayMessage += `
        <div class="caseCard ${item.isChecked ? "checked" : ""}">
            <input type="checkbox" class="checkbox" id="item_${index}" ${item.isChecked ? "checked" : ""}>
            <label for="item_${index}" class="todoText">${item.text}</label>
            <div class= "dateDelete">
            <button class= "deleteCase" onclick="deleteCase(${index})">X</button>
            <div class= "dateText">${date}</div>
        </div>
        </div>
        `;
        main.innerHTML = displayMessage;
        todoList = document.querySelectorAll('.caseCard');
    });
    count();
};

//При нажатии на чекбокс карточка задачи меняет цвет, и значение чекбокса записывается в localstorage.
main.addEventListener('change', function (event) {
    let inputId = event.target.getAttribute('id');
    let forLabel = document.querySelector('[for=' + inputId + ']');
    let valueLabel = forLabel.innerHTML;

    todos.forEach((item, index) => {
        if (item.text == valueLabel) {
            item.isChecked = !item.isChecked;
            if (item.isChecked) {
                todoList[index].classList.add('checked');
            } else {
                todoList[index].classList.remove('checked');
            }
            localStorage.setItem('todos', JSON.stringify(todos));
        };
    });
    count();
});

//Удаление всех карточек-задач
deleteAll.addEventListener('click', () => {
    todos = [];

    displayMessages();
    localStorage.setItem('todos', JSON.stringify(todos));
});

//Удаление последней карточки-задачи
deleteLast.addEventListener('click', () => {
    todos.splice(-1, 1);

    displayMessages();
    localStorage.setItem('todos', JSON.stringify(todos));
})

//Удаляет карточку при нажатии на кнопку Х
let deleteCase = (index) => {
    todos.splice(index, 1);
    displayMessages();
    localStorage.setItem('todos', JSON.stringify(todos));
    count();
};

//Счетчик для All и Completed
function count() {
    let counter = 0;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].isChecked) counter++;
    }
    allText.innerText = `All: ${todos.length}`;
    completedText.innerText = `Completed: ${counter}`;
};

//Показывает все выполненные задачи
showCompleted.addEventListener('click', () => {
    todos.forEach((item, index) => {
        if (!item.isChecked) {
            todoList[index].classList.add('hide');
        }
    })
});

//Показывает вообще все задачи
showAll.addEventListener('click', () => {
    todos.forEach((item, index) => {
        if (!item.isChecked) {
            todoList[index].classList.remove('hide');
        };
    });
});

//Поиск по задачам
inputSearch.addEventListener('input', () => {
    if (inputSearch.value != '') {
        todos.forEach((item, index) => {
            if (item.text.search(inputSearch.value) == -1) {
                todoList[index].classList.add('hide');
            } else {
                todoList[index].classList.remove('hide');
            }
        });
    }
    else {
        todos.forEach((item, index) => {
            todoList[index].classList.remove('hide');
        });
    };
});