import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: any[] = [];
  filteredTodos: any[] = [];
  searchTerm: string = '';

  constructor(private router: Router, private http: HttpClient) {
    this.getTodos();
  }

  getTodos() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe(data => {
        this.todos = data;
        this.filterTodos();
      });
  }

  filterTodos() {
    if (this.searchTerm.trim() === '') {
      this.filteredTodos = this.todos;
    } else {
      this.filteredTodos = this.todos.filter(todo => todo.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
  }

  updateSearchButton() {
    return this.searchTerm.length > 0;
  }

  searchTodos() {
    this.filterTodos();
  }

  verDetalle(id: number) {
    this.router.navigate(['/todos', id]);
  }
}
