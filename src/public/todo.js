const todos = document.getElementById('todos');

fetch('/todos')
  .then(res => res.json())
  .then(data => {
    data.forEach(todo => {
      const li = document.createElement('li');
      li.textContent = todo.title;
      todos.appendChild(li);
    });
  });