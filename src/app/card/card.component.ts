import { Component, Input } from '@angular/core';
import { Task } from '@app/models/tasks';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() task: Task;
  public faTimes = faTimes;
  public faCheck = faCheck;

  public statusToggle(): void {
    this.task.completed = !this.task.completed;
  }
}
