import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { Login } from '../login';
import { AuthService } from '../auth.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0, opacity: 0 }),
            animate('0.5s ease-out',
              style({ height: 300, opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ height: 300, opacity: 1 }),
            animate('0.5s ease-in',
              style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class AuthComponent implements OnInit {

  authForm: FormGroup;
  login: Login = { error: '', token: '', suggestions: [], last_login: 0, last_visit: '' };
  isSubmitted = false;
  state: string;
  allQuestions: any = {};
  allUsernames: string[] = [];
  dataListOptions: string[] = [];

  constructor(public authService: AuthService, private router: Router, private formBuilder: FormBuilder, private localStorageService: LocalStorageService) {
    this.state = 'init'
    authService.getUsernames().subscribe(
      (data: Login) => {
        for (let s of data.suggestions) {
          let [u, q] = s.split('|')
          this.allUsernames.push(u)
          this.allQuestions[u] = q
        }
      });
  }
  inputText: string = ''; // Property to store the text in the input field
  lastClickedImageName: string = ''; // Property to store the name of the last clicked image

  // Method to update the input field with the name of the clicked image
  updateInput(imageName: string) {
    this.inputText = imageName;
    this.lastClickedImageName = imageName;
  }


  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      username: ['', Validators.required],
      question: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  addItemToSharedArray(item: any) {
    this.localStorageService.addItemToArray(item);
  }

  onKeyUp() {

    if (this.currentUsername.length >= 3)
      this.dataListOptions = this.allUsernames.filter(x => x.startsWith(this.currentUsername))
    else
      this.dataListOptions = []


  }

  get formControls() { return this.authForm.controls; }
  get currentUsername() { return this.authForm ? this.authForm.controls.username.value : '' }
  enterUsername() {
    if (this.currentUsername) {
      // this.state = 'choice'
      this.isSubmitted = false
      this.authForm.controls['question'].setValue(this.allQuestions[this.currentUsername])
      if (this.allUsernames.includes(this.currentUsername))
        this.goLogin()
      else
        this.goRegister()
    } else
      this.isSubmitted = true

    localStorage.setItem('sharedName', this.currentUsername);

  }

  goLogin() {
    this.state = 'login'
    this.router.navigateByUrl('/login');
  }

  goRegister() {
    this.state = 'register'
    this.router.navigateByUrl('/login');
  }

  goAdmin() {
    this.router.navigateByUrl('/admin');
  }

  signIn(event: any) {
    let action = event.submitter.value == 'برو که رفتیم' ? 'login' : 'register';
    this.isSubmitted = true;
    if (this.authForm.invalid) {
      return;
    }

    /*
  this.authService.signIn(this.authForm.value, action)
  this.login = {
    error: '',
    token:  'TOKEN',
    suggestions: [],
  }
  this.router.navigateByUrl('/admin');
  */

    this.authService.signIn(this.authForm.value, action).subscribe(
      (data: Login) => {
        this.login = {
          error: data.error,
          token: data.token,
          suggestions: data.suggestions,
          last_visit: data.last_visit,
          last_login: data.last_login
        }
        if (!data.error)
          this.state = 'postLogin'
      });
  }
}
