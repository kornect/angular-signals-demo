import {computed, Injectable, signal} from '@angular/core';
import {toObservable, toSignal} from "@angular/core/rxjs-interop";
import {catchError, defer, finalize, map, of, switchMap, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class SignalsWithRxjsService {
  private usersUrl = 'https://dummyjson.com/users';
  private postsUrl = 'https://dummyjson.com/posts';
  public loading = signal(false);
  public error = signal('');
  private _user = signal<User|null>(null);

  private users$ = defer(() => {
    this.loading.set(true);
    return this.http.get<{ limit: number, skip: number, total: number, users: User[] }>(`${this.usersUrl}?limit=10`)
      .pipe(
        finalize(() => this.loading.set(false)),
        map((results) => results.users),
        catchError((error) => {
          this.error.set(error.message);
          return [];
        }))
  });

  private posts$ = toObservable(this._user).pipe(
    tap(() => this.loading.set(true)),
    switchMap((post) => {
      if(post) {
        return this.http.get<{ limit: number, skip: number, total: number, posts: Post[] }>(`${this.postsUrl}/user/${post.id}`).pipe(map((results) => results.posts));
      } else {
        return of([] as Post[]);
      }
    })
  )

  public users = toSignal<User[], User[]>(this.users$, { initialValue: [] });
  public posts = toSignal<Post[], Post[]>(this.posts$, { initialValue: [] });
  public selectedUser = computed(() => this._user());

  constructor(private http: HttpClient) { }

  selectUser(id: number) {
    this._user.set(this.users().find(user => user.id === id) || null);
  }
}
