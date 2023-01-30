import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MBTIComponent } from './mbti.component';

describe('MBTIComponent', () => {
  let component: MBTIComponent;
  let fixture: ComponentFixture<MBTIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MBTIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MBTIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
