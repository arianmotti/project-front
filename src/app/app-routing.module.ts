import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { EducationComponent } from './education/education.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { ForumComponent } from './forum/forum.component';
import { AdminComponent } from './admin/admin.component';
import { GameComponent } from './game/game.component';
import { AuthGuard } from './auth.guard';
//my code
import { MBTIComponent } from './mbti/mbti.component';
import { DISCComponent } from './disc/disc.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	//its the defult path
	{ path: '', pathMatch: 'full', redirectTo: 'home'},
	{ path: 'login', component: AuthComponent, title: 'ورود به سامانه' , data: { animationState: 'login' }},
	//only 3 buttons and return
	{ path: 'education', component: EducationComponent, title: 'آموزش' , data: { animationState: 'education' }},
	//two games and return
	{ path: 'entertain', component: EntertainmentComponent, title: 'سرگرمی' , data: { animationState: 'entertain' }},
	//same with education!
	{ path: 'forum', component: ForumComponent, title: 'انجمن', data: { animationState: 'forum' } },
	//nothing only return
	{ path: 'game', component: GameComponent, title: 'بازی' , data: { animationState: 'game' }},
	//nothing to load (need backend i think)
	{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard], title: 'سامانه شناسایی آسیب اجتماعی', data: { animationState: 'admin' } },
	//my code
	{ path: 'mbti', component: MBTIComponent,title:'تست MBTI'},
	{ path : 'disc', component: DISCComponent,title: 'تست DISC'},
	{ path : 'home', component:HomeComponent,title: 'خانه'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
