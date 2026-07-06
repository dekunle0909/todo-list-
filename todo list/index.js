const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
        console.log(taskText)
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="completeBtn">✓</button>
            <button class="deleteBtn">✗</button>
        </div>
    `;

    taskList.appendChild(li);

    taskInput.value = "";

    const completeBtn = li.querySelector(".completeBtn");
    const deleteBtn = li.querySelector(".deleteBtn");
    const text = li.querySelector("span");

    completeBtn.addEventListener("click", () => {
        text.classList.toggle("completed");
    });

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });
}