import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-view',
  templateUrl: './title-view.component.html',
  styleUrls: ['./title-view.component.scss']
})
export class TitleViewComponent {

  @Input() title: string = 'Titulo asdasddasdasasdasdasdasd';

  @Input() image: string = '/assets/img/components/tittle/tittle.jpg'; 

  constructor() { }

 

}
