import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient) { }
    getTodo(): Observable<Todo[]> {
      return this.http.get<Todo[]>('/api/data.json');
      }
}
