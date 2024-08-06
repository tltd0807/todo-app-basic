import { Component, Input, OnInit } from '@angular/core';
import { ITodoItem } from 'src/app/shared/data/todo-item-model';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItem implements OnInit {
  @Input() item: ITodoItem;
  constructor() {}

  ngOnInit(): void {
    console.log(this.item);
  }
}
