import { Component, OnInit } from '@angular/core';
import { Slide } from 'src/app/core/models/slides.model';

@Component({
  selector: "app-home-slides",
  templateUrl: "./home-slides.component.html",
  styleUrls: ["./home-slides.component.scss"],
})
export class HomeSlidesComponent implements OnInit {
  constructor() {}

  slides!: Slide[];

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

  ngOnInit(): void {}
}
