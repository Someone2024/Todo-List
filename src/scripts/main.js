class _Todo {
  constructor(title, dueDate, description, priority) {
    this.title = title;
    this.dueDate = dueDate;
    this.isDone = false;
    // this.description = description;
    // this.priority = priority;
  }
}

class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.Todos = [];
  }

  createTodo(title, dueDate) {
    const newTodo = new _Todo(title, dueDate);
    this.Todos = [newTodo];

    return newTodo;
  }
}

function CreateProject() {
  const newProject = new Project();
  const ProjectDiv = document.getElementsByClassName("todos");
  const projectName = document.createElement("h1");
  const createTaskButton = document.createElement("button");

  createTaskButton.addEventListener("click", () => {
    const input = document.createElement("input");
    const addButton = document.createElement("input");
    const cancelButton = document.createElement("button");
    addButton.type, (cancelButton.type = "button");

    const Cancel = () => {
      Project.remove(input, addButton, cancelButton);
      Project.append(createTaskButton);
    };

    addButton.addEventListener("click", () => {
      const newTodo = newProject.createTodo(input.value);
      displayTodos()
      Cancel();
    });

    cancelButton.addEventListener("click", () => {
      Cancel();
    });

    const displayTodos = () => {
      for (let i = 0; i < newProject.Todos.length; index++) {
        const task = document.createElement("button");
        task.textContent = newProject.Todos[i].title
      }
    };

    ProjectDiv.removeChild(createTaskButton);
    ProjectDiv.append(input, addButton, cancelButton);
  });
}
