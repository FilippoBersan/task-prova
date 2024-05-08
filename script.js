function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskList = document.getElementById('taskList');

  if (taskInput.value.trim() !== '') {
    var li = document.createElement('li');
    li.innerHTML = `
            <span>${taskInput.value}</span>
            <div class="task-actions">
                <button onclick="editTask(this)">Modifica</button>
                <button onclick="deleteTask(this)">Elimina</button>
            </div>
        `;
    taskList.appendChild(li);
    taskInput.value = '';
  } else {
    alert('Non hai aggiunto nessuna task!');
  }
}

function editTask(button) {
  var li = button.parentElement.parentElement;
  var span = li.querySelector('span');
  var newTask = prompt('Modifica Task:', span.textContent);
  if (newTask !== null && newTask.trim() !== '') {
    span.textContent = newTask;
  }
}

function deleteTask(button) {
  var li = button.parentElement.parentElement;
  li.remove();
}
