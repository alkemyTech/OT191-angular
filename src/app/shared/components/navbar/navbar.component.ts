import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/features/public/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  loggedIn:boolean=false;
  constructor(private authService: AuthService) { 
    authService.verifyAuth().subscribe((res)=>{
      this.loggedIn=res.success;})
  }

  ngOnInit(): void {
  }

}
