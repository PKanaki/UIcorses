import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ELearningSyllabusComponent } from './e-learning-syllabus.component';

describe('ELearningSyllabusComponent', () => {
  let component: ELearningSyllabusComponent;
  let fixture: ComponentFixture<ELearningSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ELearningSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
