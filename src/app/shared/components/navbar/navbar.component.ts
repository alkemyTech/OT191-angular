import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/features/public/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  loggedIn:boolean=localStorage.getItem('token')==undefined?false:true;
  constructor(private authService: AuthService) { 
  }

  ngOnInit(): void {
    this.authService.verifyAuth().subscribe((res)=>{
      this.loggedIn=res.success;})
  }

}
