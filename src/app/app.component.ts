import { Component } from '@angular/core';
import { Task } from '@app/models/tasks';

@Component({
  selector: 'app-my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  public currentTask = new Task(null, false);
  public tasks: Task[] = [];

  public addTask(): void {
    const task = new Task(this.currentTask.content, this.currentTask.completed);
    this.tasks.push(task);
    this.currentTask.content = null;
  }
}
