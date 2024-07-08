import { Injectable } from '@angular/core';
import { TodoItem } from '../data/todo-item-model';

@Injectable({
  providedIn: 'root',
})
export class TodoItemService {
  private todoItems: TodoItem[] = [
    { id: '1', title: 'Do morning exercise', status: true },
    { id: '2', title: 'Do homework', status: false },
    { id: '3', title: 'Go sleep early', status: false },
  ];
  constructor() {}

  get todoList() {
    return this.todoItems;
  }

  public addTodoItem(item: TodoItem) {
    this.todoItems.push(item);
  }
  public removeTodoItem(id: string) {
    this.todoItems = this.todoItems.filter((item) => item.id != id);
  }
  public removeCompleted() {
    this.todoItems = this.todoItems.filter((item) => item.status);
  }
}
