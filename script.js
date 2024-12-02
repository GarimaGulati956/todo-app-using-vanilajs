// script.js
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('todo-input');
  const addButton = document.getElementById('add-btn');
  const todoList = document.getElementById('todo-list');

  // Add a new task
  addButton.addEventListener('click', () => {
    const taskText = input.value.trim();
    if (taskText) {
      addTask(taskText);
      input.value = '';
    }
  });

  // Add task to the list
  function addTask(text) {
    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    listItem.innerHTML = `
      <span class="task-text">${text}</span>
      <button class="complete-btn">Complete</button>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    `;

    // Mark task as complete
    listItem.querySelector('.complete-btn').addEventListener('click', () => {
      listItem.classList.toggle('completed');
    });

    // Edit task
    listItem.querySelector('.edit-btn').addEventListener('click', () => {
      const newText = prompt('Edit your task:', text);
      if (newText) {
        listItem.querySelector('.task-text').textContent = newText;
      }
    });

    // Delete task
    listItem.querySelector('.delete-btn').addEventListener('click', () => {
      todoList.removeChild(listItem);
    });

    todoList.appendChild(listItem);
  }
});
