import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service'
import {Task} from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  // // usually would want to use observables and async javascript instead of this way:
  // ngOnInit(): void {
  //   this.tasks = this.taskService.getTasks();
  // }
  

  ngOnInit(): void {
    // .subscribe() is a little like .then()
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }
  
}
