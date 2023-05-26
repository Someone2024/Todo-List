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
      taskStatus.type = "checkbox";
      task.textContent = this.Todos[i].title;
      task.classList.add("task");
      deleteTask.textContent = "X";

      deleteTask.addEventListener("click", () => {
        tasksContainer.removeChild(task);
        tasksContainer.removeChild(deleteTask);
        tasksContainer.removeChild(taskStatus);
      });
      tasksContainer.append(taskStatus, task, deleteTask);
      console.log(this.Todos[i]);
    }
  };
}

const ProjectDiv = document.querySelector(".todos");

function CreateProject(title) {

  const newProject = new Project();
  const ProjectContainer = document.createElement("div");

  const projectName = document.createElement("h1");
  projectName.textContent = title;
  projectName.classList.add("project-name");

  const createTaskButton = document.createElement("button");
  createTaskButton.innerHTML =
    " <i class='fas fa-plus' aria-hidden='true'></i> Add Task";
  createTaskButton.classList.add("create-task");

  createTaskButton.addEventListener("click", () => {

    const inputContainer = document.createElement("div");
    inputContainer.classList.add("input-container")

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons-container")

    const input = document.createElement("input");
    input.classList.add("input-task");

    const addButton = document.createElement("button");
    addButton.textContent = "Add";
    addButton.classList.add("add-button");

    const cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel-button");
    cancelButton.textContent = "Cancel";

    const Cancel = () => {
      ProjectContainer.append(projectName, createTaskButton);
      ProjectContainer.removeChild(inputContainer);
    };

    addButton.addEventListener("click", () => {
      if (!input.value) {
        alert("Your task cannot be empty!");
        return;
      }
      newProject.createTodo(input.value);
      newProject.displayTodos(ProjectContainer);
      Cancel();
    });

    cancelButton.addEventListener("click", () => {
      Cancel();
    });

    buttonsContainer.append(addButton, cancelButton)
    inputContainer.append(input, buttonsContainer);
    ProjectContainer.removeChild(createTaskButton);
    ProjectContainer.append(inputContainer); //<-- append the input container here
  });

  ProjectContainer.append(projectName, createTaskButton);
  ProjectDiv.appendChild(ProjectContainer);
  console.log(projectName);

  return ProjectContainer;
}

//create the tab switch logic with a variable Tab which will store the value of what tab should be rendering

const Inbox = CreateProject("Inbox");
const Today = CreateProject("Today");
const Weekly = CreateProject("Weekly");

SwitchTabs();

function SwitchTabs() {
  let CurrentTab = "inbox";

  const InboxTab = document.querySelector(".inbox");
  const TodayTab = document.querySelector(".today");
  const WeeklyTab = document.querySelector(".weekly");
  const normalColorTab = "#ddd";
  const selectedColorTab = "#ccc";

  const verifyTab = () => {
    if (CurrentTab === "inbox") {
      Today.style.display = "none";
      Weekly.style.display = "none";
      Inbox.style.display = "block";

      InboxTab.style.backgroundColor = selectedColorTab;
      TodayTab.style.backgroundColor = normalColorTab;
      WeeklyTab.style.backgroundColor = normalColorTab;
    } else if (CurrentTab === "today") {
      Inbox.style.display = "none";
      Weekly.style.display = "none";
      Today.style.display = "block";

      InboxTab.style.backgroundColor = normalColorTab;
      TodayTab.style.backgroundColor = selectedColorTab;
      WeeklyTab.style.backgroundColor = normalColorTab;
    } else if (CurrentTab === "weekly") {
      Inbox.style.display = "none";
      Today.style.display = "none";
      Weekly.style.display = "block";

      WeeklyTab.style.backgroundColor = selectedColorTab;
      InboxTab.style.backgroundColor = normalColorTab;
      TodayTab.style.backgroundColor = normalColorTab;
    }
  };

  verifyTab();
  InboxTab.addEventListener("click", () => {
    CurrentTab = "inbox";
    verifyTab();
  });
  TodayTab.addEventListener("click", () => {
    CurrentTab = "today";
    verifyTab();
  });
  WeeklyTab.addEventListener("click", () => {
    CurrentTab = "weekly";
    verifyTab();
  });
}
