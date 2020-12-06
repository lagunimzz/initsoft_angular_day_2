import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  endPointUrl = environment.endPointUrl;
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.endPointUrl}/todos`);
    // return this.http.get(this.endPointUrl + '/todos');
  }
  updateTodo(todo: Todo): Observable<any> {
    return this.http.put(`${this.endPointUrl}/todos/${todo.id}`, todo);
  }
}
