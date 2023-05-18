class Todo {
  constructor(title,  dueDate, description, priority) {
    this.title = title;
    this.dueDate = dueDate;
    this.isDone = false;
    // this.description = description;
    // this.priority = priority;
  }
}


class Project {
    constructor(title, description){
        this.title = title;
        this.description = description
        this.Todos = [];
    }

    createTodo(title, dueDate) {
        const newTodo = new Todo(title, dueDate);
        this.Todos = [newTodo]
    }
}