import { Observable } from 'rxjs';
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

  todos$: Observable<Todo[]> | undefined;

  ngOnDestroy(): void {
    console.log('on destroy');
  }

  ngOnInit(): void {
    this.todos$ = this.todoService.getTodos();
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));

    console.log('on init');
  }

  changeCompleted(id: number): void {
    // filter
    // find

    const index = this.todos.findIndex((todo) => todo.id === id);
    const todo = this.todos[index];

    // todo.completed = false;
    // todo.id = 2;

    // const xxx = { ...todo, complete: false, id: 2 };
    // id = 2;
    // const newTodo = [ ...this.tod ];

    // console.log(todo);
    // newTodo.id = 99999999;
    // console.log(newTodo);
    // console.log(todo);

    this.todoService
      .updateTodo({
        ...todo,
        completed: !todo.completed,
      })
      .subscribe();

    this.todos[index].completed = !this.todos[index].completed;
  }
}
