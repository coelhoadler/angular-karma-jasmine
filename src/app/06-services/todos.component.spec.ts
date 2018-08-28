import { TestBed } from '@angular/core/testing';
import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { from, empty, throwError } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with the items returned from the server.', () => {
    const todos = [
      { id: 1, title: 'a' },
      { id: 1, title: 'b' },
      { id: 1, title: 'c' }
    ];

    spyOn(service, 'getTodos').and.callFake(() => {
      return from([todos]);
    });

    component.ngOnInit();

    expect(component.todos.length).toBe(3);
    expect(component.todos).toBe(todos);
  });

  it('should call the server to save the changes when a new todo item is added.', () => {
    const spy = spyOn(service, 'add').and.callFake(() => {
      return empty();
    });

    component.add();
    expect(spy).toHaveBeenCalled();
  });

  it('should set the message property if server returns an error.', () => {
    const error = `Error from the server.`;
    const spy = spyOn(service, 'add').and.callFake(() => {
      return throwError(error);
    });

    component.add();

    expect(component.message).not.toBeNull();
    expect(component.message).toBe(error);
    expect(spy).toHaveBeenCalled();
  });

  it('should call the server to delete a todo item if the user confirm', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const spy = spyOn(service, 'delete').and.returnValue(empty());

    component.delete(1);

    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should NOT call the server to delete a todo item if the user confirm', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const spy = spyOn(service, 'delete').and.returnValue(empty());

    component.delete(1);

    expect(spy).not.toHaveBeenCalled();
  });

});
