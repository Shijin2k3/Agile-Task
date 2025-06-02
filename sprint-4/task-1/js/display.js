// const display = document.getElementById('display');

// const userData = JSON.parse(localStorage.getItem('userData'));

// display.innerHTML = `
//     <div>Name: ${userData.name}</div>
//     <div>Age: ${userData.age}</div>
//     <div>Department: ${userData.department}</div>
//     <button id="backBtn">Back</button>
//     <button id="clearBtn">Clear</button>
// `;
// document.getElementById('backBtn').addEventListener('click',()=>{
//     window.location.href='./index.html';
// })
// document.getElementById("clearBtn").addEventListener("click",()=>{
//     localStorage.removeItem("userData");
//     display.innerHTML ="<div>No user data available</div>"
// })
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const userData = JSON.parse(localStorage.getItem('userData'));
    console.log(userData)

    if (userData) {
        display.innerHTML = `
            <div>Name: ${userData.name}</div>
            <div>Age: ${userData.age}</div>
            <div>Department: ${userData.department}</div>
            <div class="display-buttons">
            <button id="backBtn">Back</button>
            <button id="clearBtn">Clear</button>
            </div>
        `;
        document.getElementById('backBtn').addEventListener('click', () => {
            window.location.href = './index.html';
        });
        document.getElementById("clearBtn").addEventListener("click", () => {
            localStorage.removeItem("userData");
            display.innerHTML = "<div>No user data available</div>";
        });
    } else {
        display.innerHTML = "<div>No user data available</div>";
    }
});