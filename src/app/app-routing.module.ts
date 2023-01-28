import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { EducationComponent } from './education/education.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { ForumComponent } from './forum/forum.component';
import { AdminComponent } from './admin/admin.component';
import { GameComponent } from './game/game.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'login'},
	{ path: 'login', component: AuthComponent, title: 'ورود به سامانه' , data: { animationState: 'login' }},
	{ path: 'education', component: EducationComponent, title: 'آموزش' , data: { animationState: 'education' }},
	{ path: 'entertain', component: EntertainmentComponent, title: 'سرگرمی' , data: { animationState: 'entertain' }},
	{ path: 'forum', component: ForumComponent, title: 'انجمن', data: { animationState: 'forum' } },
	{ path: 'game', component: GameComponent, title: 'بازی' , data: { animationState: 'game' }},
	{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard], title: 'سامانه شناسایی آسیب اجتماعی', data: { animationState: 'admin' } }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
