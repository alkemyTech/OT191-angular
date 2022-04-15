import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationNewsComponent } from './creation-news.component';

describe('CreationNewsComponent', () => {
  let component: CreationNewsComponent;
  let fixture: ComponentFixture<CreationNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
