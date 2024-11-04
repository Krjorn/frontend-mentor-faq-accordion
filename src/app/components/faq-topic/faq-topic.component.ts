import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IdGeneratorService } from '../../services/id-service/id-generator.service';

@Component({
  selector: 'app-faq-topic',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './faq-topic.component.html',
  styleUrl: './faq-topic.component.css'
})
export class FaqTopicComponent implements OnInit {
  @Input()
  title = '';

  @Input()
  text = '';

  @Input()
  isLast = false;
  
  isExpanded = false;
  iconPlus = 'icon-plus';
  iconMinus = 'icon-minus';
  id = '';

  constructor(private idService: IdGeneratorService) {}

  public expandTopic(): void {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit(): void {
      this.id = this.idService.getId('faq-topic');
  }
}
