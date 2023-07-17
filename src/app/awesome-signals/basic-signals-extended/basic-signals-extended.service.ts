import {computed, effect, Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, defer, finalize, Observable, tap} from "rxjs";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class BasicSignalsExtendedService {
  private todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  private _todos = signal<Todo[]>([]);
  private _loading = signal<boolean>(false);
  private _error = signal<string>('');

  todos = computed(() => {
    // apply filters
    return this._todos();
  });

  loading = computed(() => {
    return this._loading();
  });

  error = computed(() => {
    return this._error();
  });

  completedTodos = computed(() => {
    return this.todos().filter(t => t.completed);
  });

  totalTodos = computed(() => {
    return this.todos().length;
  });

  completedPercentage = computed(() => {
    return this.completedTodos().length / this.todos().length * 100;
  });

  todosEffect = effect(() => {
    console.log('todosEffect', this.todos());
  })

  constructor(private http: HttpClient) { }

  loadTodos() {
    this._loading.set(true);

    this.http.get<Todo[]>(`${this.todosUrl}?limit=10&skip=0`)
      .pipe(
        finalize(() => this._loading.set(false)),
        tap((results) => {
          // take only the first 20 results
          const todos = results.slice(0, 10);
            this._todos.set(todos);
        }),
        catchError(err => {
          this._error.set(err.message);
          return [];
        })).subscribe();
    }

  toggleCompleted(todo: Todo) {
    defer(() => {
      this._error.set('');
      this._loading.set(true);
      this._todos.mutate((todos) => {
        const index = todos.findIndex(t => t.id === todo.id);
        if (index > -1) {
          todos[index] = {...todo, completed: !todo.completed};
        }
      });

      return this.http.put<Todo>(`${this.todosUrl}/${todo.id}`, {...todo, completed: !todo.completed })
        .pipe(
          finalize(() => this._loading.set(false)),
          catchError(err => {
            this._error.set(err.message);

            this._todos.mutate((todos) => {
              const index = todos.findIndex(t => t.id === todo.id);
              if (index > -1) {
                todos[index] = todo;
              }
            });

            return [];
          }))
    }).subscribe();
  }

  add(value: string) {
    defer(() => {
      this._error.set('');
      this._loading.set(true);

      return this.http.post<Todo>(`${this.todosUrl}`, { title: value })
        .pipe(
          finalize(() => this._loading.set(false)),
          tap((todo) => {
            this._todos.mutate((todos) => {
              todos.push(todo);
            });
          }),
          catchError(err => {
            this._error.set(err.message);

            return [];
          }))
    }).subscribe();
  }
}
