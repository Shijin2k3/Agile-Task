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
        data.forEach(function(item, idx) {
            const todoItem = document.createElement('li');
            todoItem.classList.add('todo-item');
            todoItem.setAttribute('draggable', 'true');
            todoItem.setAttribute('data-index', idx); 
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
        alert('please enter a student name ');
    }
      else if(list.some(item => item.toLowerCase() === text.toLowerCase())) {
        alert('Duplicate student name not allowed!');
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



let dragSrcIndex = null;

todoList.addEventListener('dragstart', function(e) {
    const li = e.target.closest('.todo-item');
    if (!li) return;
    dragSrcIndex = Number(li.getAttribute('data-index'));
    li.classList.add('dragging');
});

todoList.addEventListener('dragover', function(e) {
    e.preventDefault();
    const li = e.target.closest('.todo-item');
    if (!li) return;
    li.classList.add('drag-over');
});

todoList.addEventListener('dragleave', function(e) {
    const li = e.target.closest('.todo-item');
    if (!li) return;
    li.classList.remove('drag-over');
});

todoList.addEventListener('drop', function(e) {
    e.preventDefault();
    const li = e.target.closest('.todo-item');
    if (!li) return;
    li.classList.remove('drag-over');
    const dropIndex = Number(li.getAttribute('data-index'));
    if (dragSrcIndex === null || dragSrcIndex === dropIndex) return;

    
    const [moved] = list.splice(dragSrcIndex, 1);
    list.splice(dropIndex, 0, moved);

    renderList();
    dragSrcIndex = null;
});

todoList.addEventListener('dragend', function(e) {
    const li = e.target.closest('.todo-item');
    if (!li) return;
    li.classList.remove('dragging');
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
