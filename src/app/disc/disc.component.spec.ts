import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DISCComponent } from './disc.component';

describe('DISCComponent', () => {
  let component: DISCComponent;
  let fixture: ComponentFixture<DISCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DISCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DISCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
