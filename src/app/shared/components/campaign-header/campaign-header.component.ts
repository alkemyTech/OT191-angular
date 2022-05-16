import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign-header',
  templateUrl: './campaign-header.component.html',
  styleUrls: ['./campaign-header.component.scss']
})
export class CampaignHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() logoCamp:string="";
  @Input() eslogan:string="";
  @Input() logoONG:string="";
}
