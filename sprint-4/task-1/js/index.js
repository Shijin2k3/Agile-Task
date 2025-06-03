const userName=document.getElementById("name");
const userAge=document.getElementById("age");
const userDep=document.getElementById("department");
const submitBtn=document.getElementById("submit");
const nameError=document.getElementById("nameError");
const ageError=document.getElementById("ageError");
const depError=document.getElementById("depError");

const validateForm=()=>{
     let isValid=true;
     if(userName.value.trim() === ""){
        nameError.textContent="Name is required"
        isValid=false;
     }
     else{
        nameError.textContent="";
     }
     if(userAge.value.trim() === ""){
        ageError.textContent="*Age is Required";
        isValid=false;
     }
     else if(isNaN(userAge.value)){
        ageError.textContent="*Age must be a number";
        isValid=false;
     }
     else{
        ageError.textContent="";
     }
     if(userDep.value.trim()=== ""){
        depError.textContent="*Department is required";
        isValid=false;
     }
     else{
        depError.textContent="";
     }
     return isValid;

}
submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(validateForm()){
      localStorage.setItem("userData",JSON.stringify({
             name:userName.value,
             age:userAge.value,
             department:userDep.value
        }))

        userName.value="";
        userAge.value="";
        userDep.value="";
       
        window.location.href = './display.html'
        
    }
})