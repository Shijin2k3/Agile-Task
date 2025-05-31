const studentInput=document.getElementById("stud-input");
const addStudentButton=document.getElementById("add-stud");
const studentList=document.getElementById("stud-list");

addStudentButton.addEventListener("click",(e)=>{
    e.preventDefault();
    const name=studentInput.value.trim();
    if(name === ''){
        return alert("Please enter a name")
    }
    const li = document.createElement('li');
    li.innerHTML=`
      <span>${name}</span>
      <div class="actions">
          <button class="edit">Edit</button>
          <button class="delete">X</button>
      </div>
    `;
    studentList.appendChild(li);
    studentInput.value="";
})
studentList.addEventListener("click",(e)=>{
    const target=e.target;
    const li=target.closest('li');
    if(!li) return;
    if(target.classList.contains('delete')){
        li.remove();
    }
    else if(target.classList.contains('edit')){
        const span=li.querySelector('span');
       if (!span) return;
        // Inline edit: replace span with input
        const input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent;
        input.className = 'edit-input';
        span.replaceWith(input);
        input.focus();

        function saveEdit() {
            const newValue = input.value.trim();
            const newSpan = document.createElement('span');
            newSpan.textContent = newValue || span.textContent;
            newSpan.style.flexGrow = 1;
            input.replaceWith(newSpan);
        }
        input.addEventListener('blur', saveEdit);
        input.addEventListener('keydown', (event) => {
            if(event.key === 'Enter') {
                input.blur();
            }
        });
    }
})
