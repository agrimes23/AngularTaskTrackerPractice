import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Task} from '../Task';
import {TASKS} from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  // usually would want to use observables and async javascript instead of this way:
  // getTasks(): Task[] {
  //   return TASKS;
  // }


  // OBSERVABLE:
  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
