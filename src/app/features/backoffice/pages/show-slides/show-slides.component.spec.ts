import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSlidesComponent } from './show-slides.component';

describe('ShowSlidesComponent', () => {
  let component: ShowSlidesComponent;
  let fixture: ComponentFixture<ShowSlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSlidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
