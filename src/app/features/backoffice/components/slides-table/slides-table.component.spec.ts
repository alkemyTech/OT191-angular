import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesTableComponent } from './slides-table.component';

describe('SlidesTableComponent', () => {
  let component: SlidesTableComponent;
  let fixture: ComponentFixture<SlidesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
