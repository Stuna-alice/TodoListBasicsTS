import { Person, TodoItems } from "@/models/TodoItems";
import { View } from "react-native";

const DEFAULT_STATE = {
  items: [], // Initial state
};

class TodoItemStore {
  private items: TodoItems[] = [];
  private counter: number = 0;
  constructor() {
    this.items = DEFAULT_STATE.items;
  }

  addTodo(key: string, taskName: string, taskDate: string) {
    const makeTodoItem: TodoItems = {
      id: Date.now() + this.counter++,
      key,
      taskName,
      taskDate,
    }; //Insert new item here
    this.items.push(makeTodoItem);
  }
  getAllTodo(): TodoItems[] {
    return this.items;
  }
  getById(id: number): TodoItems | undefined {
    return this.items.find((item) => item.id === id);
  }

  deleteTodobyId(id: number): void {
    this.items = this.items.filter((x) => x.id !== id);
  }
}

class PersonalInfo {
  private personData: Person[] = [];
}

// const store = new TodoItemStore();
// store.addTodo("1", "Learn TypeScript", "2025-01-25");
// store.addTodo("2", "Finish React Native project", "2025-02-01");

const createTodo = new TodoItemStore();
export default createTodo;

// console.log(store.getAllTodo());

// store.deleteTodobyId(store.getAllTodo()[0].id);

// console.log("deleted data", store.getAllTodo());

//const todo = store.getById(store.getAllTodo()[0].id);

//console.log("SpecificTodo:", todo);
