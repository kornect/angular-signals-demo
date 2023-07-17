import {Component, OnInit} from '@angular/core';
import {BasicSignalsExtendedService, Todo} from "./basic-signals-extended.service";

@Component({
  selector: 'app-basic-signals-extended',
  templateUrl: './basic-signals-extended.component.html',
  styleUrls: ['./basic-signals-extended.component.scss']
})
export class BasicSignalsExtendedComponent implements OnInit {
  loading = this.service.loading;
  todos = this.service.todos;
  totalTodos = this.service.totalTodos;
  completedPercentage = this.service.completedPercentage;


  constructor(private service: BasicSignalsExtendedService) {
  }

  ngOnInit(): void {
    this.service.loadTodos();
  }

  toggleCompleted(todo: Todo) {
    this.service.toggleCompleted(todo);
  }

  addTodo(value: string) {
    this.service.add(value);
  }

}
