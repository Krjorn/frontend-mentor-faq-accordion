import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqTopicComponent } from './faq-topic.component';

describe('FaqTopicComponent', () => {
  let component: FaqTopicComponent;
  let fixture: ComponentFixture<FaqTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqTopicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
