import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class TodoService {
  constructor(private http: Http) {
  }

  add(todo): Observable<any> {
    return this.http.post('...', todo);
  }

  getTodos(): Observable<any> {
    return this.http.get('...');
  }

  getTodosPromise(): Observable<any> {
    return this.http.get('...');
  }

  delete(id): Observable<any> {
    return this.http.delete('...');
  }
}
