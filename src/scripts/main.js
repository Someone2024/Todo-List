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
      const task = document.createElement("div");
      const deleteTask = document.createElement("button");
      const taskStatus = document.createElement("input");
      taskStatus.type = "checkbox"
      task.textContent = this.Todos[i].title;
      deleteTask.textContent = "X"

      deleteTask.addEventListener("click", ()=>{
        tasksContainer.removeChild(task);
        tasksContainer.removeChild(deleteTask);
        tasksContainer.removeChild(taskStatus);
      });
      tasksContainer.append(taskStatus,task, deleteTask);
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
      if (!input.value) {
        alert("Your task cannot be empty!");
        return;
      }
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

//create the tab switch logic with a variable Tab which will store the value of what tab should be rendering

const Inbox = CreateProject("Inbox");
const Today = CreateProject("Today");
const Weekly = CreateProject("Weekly");