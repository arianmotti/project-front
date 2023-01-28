import { Injectable } from '@angular/core';
import { User } from './user';
import { Login } from './login';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	loginUrl = 'api/authorize';
	username: string = '?';
	last_login: string = '';
	last_visit: string = '';
	sectionTitle: string = '';
	
	constructor(private http: HttpClient) { }
	
	public signIn(userData: User, action: string){
		/*
		localStorage.setItem('ACCESS_TOKEN', 'TOKEN');
		this.username = userData.username;
		userData.action = action
		*/

		this.username = userData.username;
		userData.action = action
		return this.http.post<Login>(this.loginUrl, userData).pipe(
			tap((response: Login) => {
				console.log(response)
				if(!response.error) {
					localStorage.setItem('ACCESS_TOKEN', response.token);
					if(response.last_login) {
						const date = new Date(response.last_login)
						this.last_login = date.toLocaleDateString("fa-IR", {
							weekday: "long",
							year: "numeric",
							month: "long",
							day: "numeric",
							hour: 'numeric', minute: 'numeric', second: 'numeric'
						})
					}
					this.last_visit = response.last_visit
				}
			}	
		))
	}
	public visit(topic: string) {
		// todo: send token and validate on server side
		this.http.post<Login>(this.loginUrl, {action:'visit', username:this.username, password:topic})
		.subscribe((response: Login) => {
				console.log(response)
			}
		)
	}
	public isLoggedIn(){
		return localStorage.getItem('ACCESS_TOKEN') !== null;  
	}
	public logout(){
		localStorage.removeItem('ACCESS_TOKEN');
		this.last_login = ''
	}
	public getUsernames(){
		return this.http.post<Login>(this.loginUrl, {action:'all'}).pipe(
			tap((response: Login) => {
				console.log(response)
			}
		))
	}
}