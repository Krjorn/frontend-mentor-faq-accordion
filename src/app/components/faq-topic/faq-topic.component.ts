import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faq-topic',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './faq-topic.component.html',
  styleUrl: './faq-topic.component.css'
})
export class FaqTopicComponent {
  @Input()
  title = '';

  @Input()
  text = '';

  @Input()
  isLast = false;
  
  isExpanded = false;
  iconPlus = 'icon-plus';
  iconMinus = 'icon-minus';

  public expandTopic(): void {
    this.isExpanded = !this.isExpanded;
  }
}
