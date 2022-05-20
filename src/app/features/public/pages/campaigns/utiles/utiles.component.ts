import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utiles',
  templateUrl: './utiles.component.html',
  styleUrls: ['./utiles.component.scss']
})
export class UtilesComponent implements OnInit {
  currentDate: any;
	date: Date = new Date();
	eventDate: any = new Date("Jun 3, 2022 16:40:00").getTime();
	timeLeftSeconds = Math.floor((this.eventDate - this.date.getTime()) / 1000);
  timeLeftString="";
	constructor() {
    this.countDown();
	}

	countDown() {
		let intervalId = setInterval(() => {
			this.timeLeftSeconds = this.timeLeftSeconds - 1;
      this.timeLeftString=this.calculateTime(this.timeLeftSeconds);
			if (this.timeLeftSeconds === 0) clearInterval(intervalId);
		}, 1000);
	}
	calculateTime(timeLeftSeconds: number): string {
		const days = Math.floor(timeLeftSeconds / (60 * 60 * 24));
		const hours = Math.floor((timeLeftSeconds / (60 * 60)-(days*24)));
		const minutes = Math.floor((timeLeftSeconds / (60))-(days*24*60)-(hours*60));
		let date = days + "d " + hours + "h " + minutes + "m ";
		return date;
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

	ngOnInit(){		
	}
}
