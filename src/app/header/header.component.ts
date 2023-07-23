import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username = ''

  constructor(private route: Router , private authService: AuthService) {
    this.username = authService.username;
   }

  ngOnInit(): void {
  }

}
