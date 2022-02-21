import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridColorComponent } from './grid-color.component';

describe('GridColorComponent', () => {
  let component: GridColorComponent;
  let fixture: ComponentFixture<GridColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
