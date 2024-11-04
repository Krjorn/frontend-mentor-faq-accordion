import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaqFrameComponent } from './components/faq-frame/faq-frame.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FaqFrameComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'faq-accordion';
}
