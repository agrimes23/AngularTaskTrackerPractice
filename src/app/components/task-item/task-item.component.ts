import { Component, Input, Output } from '@angular/core';
import {Task} from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  @Input()
  task!: Task;

  onDelete() {
    console.log(123)
  }

}
