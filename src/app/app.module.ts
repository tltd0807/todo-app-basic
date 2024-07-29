import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppHeader } from './components/header/header.component';
import { TodoList } from './components/todo/todo-list.component';
import { TodoItem } from './components/todo/todo-item/todo-item.component';
import { AppFooter } from './components/footer/footer.component';
import { TodoInput } from './components/todo/todo-input/todo-input.component';
@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    TodoList,
    TodoItem,
    AppFooter,
    TodoInput,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
