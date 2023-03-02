import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { EducationComponent } from './education/education.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { ForumComponent } from './forum/forum.component';
import { UnityComponent } from './unity/unity.component';
import { GameComponent } from './game/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//my code
import { MBTIComponent } from './mbti/mbti.component';
import { DISCComponent } from './disc/disc.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AdminComponent,
    EducationComponent,
    EntertainmentComponent,
    ForumComponent,
    UnityComponent,
    GameComponent,
    //my code
    MBTIComponent,
    DISCComponent,
    HomeComponent,
    HeaderComponent,
 
  ],
  imports: [
	BrowserAnimationsModule,
    BrowserModule,
	HttpClientModule,
	FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
