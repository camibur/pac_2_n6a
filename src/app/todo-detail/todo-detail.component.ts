import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  todo: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const todoId = this.route.snapshot.params['id'];
    this.http.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .subscribe((data: any) => {
        this.todo = data;
      });
  }
}
