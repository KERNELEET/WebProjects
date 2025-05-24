document.addEventListener('DOMContentLoaded', () => {
    const todoinput = document.getElementById("todo-input");
    const addbtn = document.getElementById("add-task-btn");
    const list = document.getElementById("task-list");

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(task => rendertask(task));

    addbtn.addEventListener('click', () => {
        const tasktext = todoinput.value.trim();
        if (tasktext === "") return;

        const newtask = {
            id: Date.now(),
            text: tasktext,
            completed: false
        };

        tasks.push(newtask);
        savetasks();
        todoinput.value = "";
        rendertask(newtask);
    });

    function rendertask(task) {
        const li = document.createElement('li');
        li.setAttribute('data-id', task.id);
        if (task.completed) li.classList.add("completed");

        li.innerHTML = `
            <span>${task.text}</span>
            <button>Delete</button>
        `;
        //Toggle 
        li.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') return;
            task.completed = !task.completed;
            li.classList.toggle('completed');
            savetasks();
        });
        // Delete task
        li.querySelector('button').addEventListener('click', (e) => {
            e.stopPropagation();
            tasks = tasks.filter(t => t.id !== task.id);
            li.remove();
            savetasks();
        });
        list.appendChild(li);
    }

    function savetasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});
