import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @HostBinding('style.--target-transform')
  private targetTransform: string = 'scale(0.75) rotate(-30deg) translateX(0.5em) translateY(1.87em);';
  @HostBinding('style.--target-animation')
  private targetAnimation: string = '';
  
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
	
	education(){
    this.router.navigateByUrl('/education');
	}
	entertain(){
    this.router.navigateByUrl('/entertain');
	}
	forum(title:string, transform:string){
		this.targetTransform = transform + ' scale(0.75) rotate(0deg)'
		this.targetAnimation = 'float 3s 1'
		this.authService.visit(title)
		setTimeout(()=>{
			this.authService.sectionTitle = `به سیاره‌ی ${title} خوش اومدی`
			if(title!='بازی و شادی')
				this.router.navigateByUrl('/forum');
			else
				this.router.navigateByUrl('/entertain');
		}, 1200);
	}
}
