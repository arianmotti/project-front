import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeTransitionAnimations } from './route-transition-animations';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeTransitionAnimations]
})
export class AppComponent {
  title = 'سامانه شناسایی آسیب اجتماعی';
  // sound = new Howl({
	//  loop: true,
  //    src: ['/assets/bg_music.mp3']
  // });
  ngOnInit() {
    // Play the sound.
    // this.sound.play();
    // Change global volume.
    // Howler.volume(1);
  }
  prepareRoute(outlet: RouterOutlet) {
  return outlet && 
    outlet.activatedRouteData && 
    outlet.activatedRouteData['animationState'];
 }
 
}
