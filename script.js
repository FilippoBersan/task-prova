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

// Funzione per attivare/disattivare la modalità scura
function toggleDarkMode() {
  // Verifica se il body ha la classe 'dark-mode'
  if (document.body.classList.contains('dark-mode')) {
    // Se la classe è presente, la rimuove (disattiva la modalità scura)
    document.body.classList.remove('dark-mode');
  } else {
    // Altrimenti, aggiunge la classe (attiva la modalità scura)
    document.body.classList.add('dark-mode');
  }
}

// Aggiungi un ascoltatore di eventi per il pulsante di toggle
document
  .getElementById('darkModeButton')
  .addEventListener('click', toggleDarkMode);
