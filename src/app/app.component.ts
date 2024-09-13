import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaqTopicComponent } from './components/faq-topic/faq-topic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FaqTopicComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'faq-accordion';
}
