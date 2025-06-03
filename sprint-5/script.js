const input=document.getElementById('stud-input');
const addBtn=document.getElementById('add-stud');
const todoList=document.getElementById('stud-list');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const clearAllBtn = document.getElementById('clear-all');
const countDiv = document.getElementById('stud-count');

let list=[];
let filteredList =[];


const renderList =(data = list)=>{
    todoList.innerHTML = '';
        data.forEach(function(item) {
            const todoItem = document.createElement('li');
            todoItem.classList.add('todo-item')
            todoItem.innerHTML = `
                <span>${item}</span>
                <div class="actions">
                    <img src='./img/edit.png' alt='edit' />
                    <img src='./img/delete.png' class="delete" alt='delete' />
                </div>
            `;
            todoList.appendChild(todoItem);
        }); 
        countDiv.textContent = `Total Students: ${list.length}`;
}

addBtn.addEventListener('click',function(e){
    e.preventDefault();
    const text=input.value.trim();
    if(text === ''){
        alert('please enter a todo item');
    }
    else {
        list.push(text);
        input.value = '';
        renderList();
    }
})
//search input
searchInput.addEventListener('input',function(e){
    const query=searchInput.value.trim().toLowerCase();
    if (query === '') {
        renderList();
    } else {
        filteredList = list.filter(item => item.toLowerCase().includes(query));
        renderList(filteredList);
    }
})
//click search button
searchBtn.addEventListener('click', function() {
    const query = searchInput.value.trim().toLowerCase();
    if (query === '') {
        renderList();
    } else {
        filteredList = list.filter(item => item.toLowerCase().includes(query));
        renderList(filteredList);
    }
});
//clear all
clearAllBtn.addEventListener('click', function() {
    if(list.length === 0){
        alert('No students to clear !')
    }
    else if(confirm('Are you sure you want to clear all students?')) {
        list = [];
        renderList();
    }
});


todoList.addEventListener('click',function(e){
    const target=e.target;
    const todoItem=target.closest('.todo-item');
    if(!todoItem) return;
    
    const isSearching = searchInput.value.trim() !== '';
    const currentList = isSearching ? filteredList : list;
    const index = Array.from(todoList.children).indexOf(todoItem);

    if (target.alt === 'delete') {
        const itemToRemove = currentList[index];
        list = list.filter(item => item !== itemToRemove);
       
        if (isSearching) {
            filteredList = list.filter(item => item.toLowerCase().includes(searchInput.value.trim().toLowerCase()));
            renderList(filteredList);
        } else {
            renderList();
        }
    } else if (target.alt === 'edit') {
        const currentValue = currentList[index];
        const newValue = prompt('Edit your todo item:', currentValue);
        if (newValue !== null && newValue.trim() !== '') {
            const mainIndex = list.indexOf(currentValue);
            if (mainIndex !== -1) {
                list[mainIndex] = newValue.trim();
            }
            if (isSearching) {
                filteredList = list.filter(item => item.toLowerCase().includes(searchInput.value.trim().toLowerCase()));
                renderList(filteredList);
            } else {
                renderList();
            }
        }
    }
});


renderList();
