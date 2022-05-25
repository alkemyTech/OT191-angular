import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Slide } from 'src/app/core/models/slides.model';
import { SlideProviderService } from 'src/app/features/backoffice/services/providers/slidesController/slide-provider.service';
import { Pipe, PipeTransform } from '@angular/core';
    @Pipe({name: 'htmlToPlaintext'})
    export class HtmlToPlaintextPipe implements PipeTransform {
      transform(value: string): string {
        return value? value.replace(/]+>/gm, '') : '';
      }
    }

@Component({
  selector: "app-home-slides",
  templateUrl: "./home-slides.component.html",
  styleUrls: ["./home-slides.component.scss"],
})
export class HomeSlidesComponent implements OnInit {
  slides?:Slide[]; 
  public slide1:any;
  public slide2:any;
  public slide3:any;
  
  constructor(private slideService:SlideProviderService) {
    
  this.slideService.getSlides().subscribe((response) => {
    this.slides=response;
    this.slides.map(res=>{
      if(res.order == 1){
        console.log("orden1", res)
        this.slide1 = res
      }
    })
    this.slides.map(res=>{
      if(res.order == 2){
        console.log("orden2", res)
        this.slide2 = res
      }
    })
    this.slides.map(res=>{
      if(res.order == 3){
        console.log("orden3", res)
        this.slide3=res
      }
    })
  });


  }

  

  getSlides(){

  }

  slides2 = [
    {
      name: "First slide",
      description: "some description",
      image: "../../../../../assets/img/auth/login.jpg",
    },
    {
      name: "Second slide",
      description: "some description",
      image: "../../../../../assets/img/auth/login.jpg",
    },
    {
      name: "third slide",
      description: "some description",
      image: "../../../../../assets/img/auth/login.jpg",
    },
  ];

  

  ngOnInit(): void {
    
  }
}
