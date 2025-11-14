const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add Task
addBtn.addEventListener("click", () => {
    const taskText = input.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        <span class="task">${taskText}</span>
        <button class="delete-btn">X</button>
    `;

    // Toggle complete
    li.querySelector(".task").addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Delete task
    li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
    });

    taskList.appendChild(li);
    input.value = "";
});
