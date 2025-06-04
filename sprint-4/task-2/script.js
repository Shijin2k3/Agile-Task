const input=document.getElementById('todo-input');
const addBtn=document.getElementById('add-btn');
const todoList=document.getElementById('todo-list');
             
let list=[];
const renderList =()=>{
    todoList.innerHTML = '';
        list.forEach(function(item) {
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
}

addBtn.addEventListener('click',function(e){
    e.preventDefault();
    const text=input.value.trim();
    if(text === ''){
        alert('please enter a todo item');
    }
     else if(list.some(item => item.toLowerCase() === text.toLowerCase())) {
        alert('Duplicate value not allowed!');
     }
    else {
        list.push(text);
        input.value = '';
        renderList();
    }
})
todoList.addEventListener('click',function(e){
    const target=e.target;
    const todoItem=target.closest('.todo-item');
    if(!todoItem) return;
    if(target.alt === 'delete'){
        const index = Array.from(todoList.children).indexOf(todoItem);
        list.splice(index,1);
        renderList();
    }
    else if(target.alt === 'edit'){
        const index = Array.from(todoList.children).indexOf(todoItem);
        const currentValue = list[index];
        const newValue = prompt('Edit your todo item:', currentValue);
        if (newValue !== null && newValue.trim() !== '') {
            list[index] = newValue.trim();
            renderList();
        }

    }
})
