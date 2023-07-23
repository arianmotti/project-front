import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sharedName: string = '';

  constructor(private route: Router ) {
    this.sharedName = localStorage.getItem('sharedName') || '';
   }

  ngOnInit(): void {

  }

}
