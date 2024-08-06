import { Injectable } from '@angular/core';
import { ITodoItem } from '../shared/data/todo-item-model';

@Injectable({
  providedIn: 'root',
})
export class TodoItemService {
  private todoItems: ITodoItem[] = [
    { id: '1', title: 'Do morning exercise', status: true },
    { id: '2', title: 'Do homework', status: false },
    { id: '3', title: 'Go sleep early', status: false },
    { id: '4', title: 'Read book 20 minutes', status: false },
    { id: '5', title: 'Drink 2 liters water', status: false },
  ];
  constructor() {}

  // get todoList() {
  //   return [...this.todoItems]; //Trả về kiểu này để thay đổi tham chiếu
  // }

  getTodoItems(): ITodoItem[] {
    return [...this.todoItems]; // Trả về một bản sao của mảng để thay đổi tham chiếu
  }

  public addTodoItem(item: ITodoItem) {
    this.todoItems.push(item);
  }

  public removeTodoItem(id: string) {
    this.todoItems = this.todoItems.filter((item) => item.id != id);
  }

  public removeCompleted() {
    this.todoItems = this.todoItems.filter((item) => item.status);
  }
}
