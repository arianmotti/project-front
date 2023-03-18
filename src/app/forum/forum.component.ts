import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from  '../auth.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  showComment: boolean = false;
  currentTitle: string = '';

  showCommentBox(title: string) {
      this.currentTitle = title;
      this.showComment = true;
  }

  closeCommentBox() {
    this.showComment = false;
  }


  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  

}
