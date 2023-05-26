class _Todo {
  constructor(title) {
    this.title = title;
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

  createTodo(title) {
    const newTodo = new _Todo(title);
    this.Todos = [newTodo];

    return newTodo;
  }

  displayTodos = (tasksContainer) => {
    for (let i = 0; i < this.Todos.length; i++) {
      const task = document.createElement("button");
      task.textContent = this.Todos[i].title;
      tasksContainer.appendChild(task);
      console.log(this.Todos[i]);
    }
  };
}

function CreateProject(title) {
  const newProject = new Project();
  const ProjectDiv = document.querySelector(".todos");
  const projectName = document.createElement("h1");
  projectName.textContent = title;
  const createTaskButton = document.createElement("button");
  createTaskButton.textContent = "add task";

  createTaskButton.addEventListener("click", () => {
    const input = document.createElement("input");
    const addButton = document.createElement("button");
    addButton.textContent = "Add";
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";

    const Cancel = () => {
      ProjectDiv.append(projectName, createTaskButton);
      ProjectDiv.removeChild(input);
      ProjectDiv.removeChild(addButton);
      ProjectDiv.removeChild(cancelButton);
    };

    addButton.addEventListener("click", () => {
      if(!input.value) return
      newProject.createTodo(input.value);
      newProject.displayTodos(ProjectDiv);
      Cancel();
    });

    cancelButton.addEventListener("click", () => {
      Cancel();
    });

    ProjectDiv.removeChild(createTaskButton);
    ProjectDiv.append(input, addButton, cancelButton);
  });

  ProjectDiv.append(projectName, createTaskButton);
  console.log(projectName);
}

CreateProject("Today", 2);
