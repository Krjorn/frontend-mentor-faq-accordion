import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqFrameComponent } from './faq-frame.component';

describe('FaqFrameComponent', () => {
  let component: FaqFrameComponent;
  let fixture: ComponentFixture<FaqFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
