import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Task } from '@app/models/tasks';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() task: Task;
  @Input() cardIndex;
  @Output() deleteTaskEmitter = new EventEmitter<any>();
  public faTimes = faTimes;
  public faCheck = faCheck;

  ngOnInit() {
    this.task.index = this.cardIndex;
  }

  public statusToggle(): void {
    this.task.completed = !this.task.completed;
  }

  public deleteTask(task): void {
    this.deleteTaskEmitter.emit(task);
  }
}
