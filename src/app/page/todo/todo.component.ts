import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit, OnDestroy {
  constructor() {}
  ngOnDestroy(): void {
    console.log('on destroy');
  }

  ngOnInit(): void {
    console.log('on init');
  }
}
