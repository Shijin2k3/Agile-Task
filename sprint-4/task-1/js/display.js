document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const userData = JSON.parse(localStorage.getItem('userData'));
    console.log(userData);

    function addBackBtnListener() {
        const backBtn = document.getElementById('backBtn');
        if (backBtn) {
            backBtn.addEventListener('click', () => {
                window.location.href = './index.html';
            });
        }
    }

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
        addBackBtnListener();
        document.getElementById("clearBtn").addEventListener("click", () => {
            localStorage.removeItem("userData");
            display.innerHTML = `
                <div>No user data available</div>
                <button id="backBtn">Back</button>
            `;
            addBackBtnListener();
        });
    } else {
        display.innerHTML = `
            <div>No user data available</div>
            <button id="backBtn">Back</button>
        `;
        addBackBtnListener();
    }
});