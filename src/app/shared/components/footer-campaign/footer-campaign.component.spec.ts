import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCampaignComponent } from './footer-campaign.component';

describe('FooterCampaignComponent', () => {
  let component: FooterCampaignComponent;
  let fixture: ComponentFixture<FooterCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterCampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
