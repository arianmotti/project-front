import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
username: string;
  constructor(private authService: AuthService, private router: Router) { 
	this.username = authService.username;
  }

  ngOnInit(): void {
  }
  
  back(){
    this.router.navigateByUrl('/admin');
  }
	play(){
    this.router.navigateByUrl('/game');
  }
}
