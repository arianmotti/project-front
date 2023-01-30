import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';
// import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-mbti',
  templateUrl: './mbti.component.html',
  styleUrls: ['./mbti.component.css']
})
export class MBTIComponent implements OnInit {
  answers=Array(20).fill(null)
  result = ""
  allnotanswered = false

  constructor() { }

  ngOnInit(): void {
  }
  calculate_mbti(){
    if(this.answers.includes(null)){
      this.allnotanswered=true
    } else{
  
    var E=0
    var I=0
    var N=0
    var S=0
    var T=0
    var F=0
    var P=0
    var J=0
    const first5=this.answers.slice(0,5);
    // console.log(first5)
    var numberofA=first5.reduce((count , answer) => answer==='A' ? count +1 : count,0)
    var firstLetter=numberofA>2 ? 'E' : 'I';
    this.result+=numberofA>2 ? 'E' : 'I';
    // console.log(firstLetter)
    const second5=this.answers.slice(5,10);
    var nemberofA=second5.reduce((count , answer) => answer==='A' ? count +1 : count,0)
    const secondLetter=numberofA>2 ? 'S' : 'N';
    this.result+=numberofA>2 ? 'S' : 'N';
    const third5=this.answers.slice(10,15);
    var nemberofA=third5.reduce((count , answer) => answer==='A' ? count +1 : count,0)
    const thirdLetter=numberofA>2 ? 'T' : 'F';
    this.result+=numberofA>2 ? 'T' : 'F';
    const last5=this.answers.slice(15,20);
    var nemberofA=last5.reduce((count , answer) => answer==='A' ? count +1 : count,0)
    const lastLetter=numberofA>2 ? 'J' : 'P';
    this.result+=numberofA>2 ? 'J' : 'P';
    // console.log(this.answers,firstLetter,secondLetter,thirdLetter,lastLetter,result)

    }
  
    


  }
  

}
