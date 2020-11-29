import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  task: string = 'hola';

  addTask(): void{}

  deleteTask(): void {}

  editTask(): void{}

  constructor() { }

  ngOnInit(): void {
  }

  updateTask(): void {}
}
