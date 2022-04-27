//Верстка
let container = document.getElementById('root');
container.classList.add('container');

let header = document.createElement('div');
container.append(header);
header.classList.add('header');

let headerTop = document.createElement('div');
header.append(headerTop);
headerTop.classList.add('headerTop');

let deleteAll = document.createElement('button');
headerTop.append(deleteAll);
deleteAll.classList.add('buttn');
deleteAll.innerHTML = 'Delete All';

let deleteLast = document.createElement('button');
headerTop.append(deleteLast);
deleteLast.classList.add('buttn');
deleteLast.innerHTML = 'Delete Last';

let inputTodo = document.createElement('input');
headerTop.append(inputTodo);
inputTodo.classList.add('inputTodo');
inputTodo.setAttribute('placeholder', 'Enter to do...');

let addButton = document.createElement('button');
headerTop.append(addButton);
addButton.classList.add('buttn');
addButton.innerHTML = 'Add';

let headerBottom = document.createElement('div');
header.append(headerBottom);
headerBottom.classList.add('headerBottom');

let allText = document.createElement('div');
headerBottom.append(allText);
allText.classList.add('allText');
allText.innerHTML = 'All: 0';

let completedText = document.createElement('div');
headerBottom.append(completedText);
completedText.classList.add('completedText');
completedText.innerHTML = 'Completed: 0';

let showAll = document.createElement('button');
headerBottom.append(showAll);
showAll.classList.add('buttn');
showAll.innerHTML = 'Show All';

let showCompleted = document.createElement('button');
headerBottom.append(showCompleted);
showCompleted.classList.add('buttn');
showCompleted.innerHTML = 'Show Completed';

let inputSearch = document.createElement('input');
headerBottom.append(inputSearch);
inputSearch.classList.add('inputSearch');
inputSearch.setAttribute('placeholder', 'Search...');

let main = document.createElement('div');
container.append(main);
main.classList.add('main');

export {container, header, headerTop, deleteAll, deleteLast, inputTodo, addButton, 
    headerBottom, allText, completedText, showAll, showCompleted, inputSearch, main};