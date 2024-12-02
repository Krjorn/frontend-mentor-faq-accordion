import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Topic } from './interfaces/topic';
import { CommonModule } from '@angular/common';
import { FaqTopicComponent } from '../faq-topic/faq-topic.component';

@Component({
  selector: 'app-faq-frame',
  standalone: true,
  imports: [ FaqTopicComponent,CommonModule ],
  templateUrl: './faq-frame.component.html',
  styleUrl: './faq-frame.component.css'
})
export class FaqFrameComponent implements OnInit {
  topics: Topic[] = [];
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
      // this.http.get<Topic[]>('http://localhost:3000/data.json')
      this.http.get<Topic[]>('https://raw.githubusercontent.com/Krjorn/frontend-mentor-faq-accordion/refs/heads/main/server/data.json')
        .subscribe({
          next: topics => this.topics = topics
        })
  }
}
