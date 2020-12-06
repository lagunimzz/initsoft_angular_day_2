import { TodoService } from './../../service/todo.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit, OnDestroy {
  constructor(private todoService: TodoService) {}

  todos: Todo[] = [];

  ngOnDestroy(): void {
    console.log('on destroy');
  }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
    console.log('on init');
  }
}
