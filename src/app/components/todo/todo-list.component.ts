import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TodoItemService } from 'src/app/services/todo-item.service';
import { ITodoItem } from 'src/app/shared/data/todo-item-model';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoList implements OnInit {
  todoItems: ITodoItem[] = [];

  constructor(
    private todoItemService: TodoItemService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // this.todoItems = this.todoItemService.todoList;
    this.todoItems = this.todoItemService.getTodoItems();

    console.log(this.todoItems);
    this.cdr.detectChanges();
  }
}
