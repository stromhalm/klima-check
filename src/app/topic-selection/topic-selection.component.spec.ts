import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicSelectionComponent } from './topic-selection.component';

describe('TopicSelectionComponent', () => {
  let component: TopicSelectionComponent;
  let fixture: ComponentFixture<TopicSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
