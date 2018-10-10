import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  items: Todo[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodo();
  }
  getTodo() {
    this.todoService.getTodo()
    .subscribe(items => this.items = items);
  }

}
