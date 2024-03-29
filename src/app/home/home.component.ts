import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  speeches = [ '«ظرفیت انسان برای پذیرش امید، شگفت‌انگیزترین حقیقت زندگی است. امید، برای بشر یک مقصد واضح مشخص می‌کند و انرژی لازم را برای شروع کردن به او می‌دهد.',
  'امیدتان را که از دست بدهید، انگار همه‌چیز را از دست داده‌اید. البته حتی زمانی که فکر می‌کنید همه چیز از دست رفته است، باز هم امید وجود دارد.',
  'امید مانند ستونی است که جهان را سرپا نگه می‌دارد. امید، رؤیای انسان بیدار است.',
  'از دیروز درس بگیر، برای امروز، زندگی کن و به فردا امیدوار باش. مهم‌ترین چیز این است که از پرسیدن دست نکشی.',
  'شما آنچه فکر می کنید احساس می کنید لذا شما می توانید یاد بگیرید در مورد هر چیزی متفاوت فکر نمایید و تصمیم بگیرید.',
  ' اتفاق اول بايد در درون من رخ دهد تا تكرار آن را در دنياي بيرون ببینم.',
  'موفقیت از آن کسانی است که یک ثانیه دیرتر نا امید می‌شوند و یک لحظه دیرتر دست از تلاش بر می‌دارند.',
  'حتی تاریک‌ترین شب‌ها به پایان خواهد رسید و سپبده دم بار دیگر طلوع خواهد کرد.'
  

]
 speech:String

  constructor() { }

  ngOnInit() {
    this.speech = this.speeches[Math.floor(Math.random() * this.speeches.length)];
    // const audio = new Audio();
    // audio.src = 'assets/bg_music.mp3';
    // audio.load();
    // audio.play();

    
  }
  visible1=false
  visible2=false
  visible3=false
  visible4=false
  visible5=false
  show1(){
    this.visible1=!this.visible1
  }
  show2(){
    this.visible2=!this.visible2
  }
  show3(){
    this.visible3=!this.visible3
  }
  show4(){
    this.visible4=!this.visible4
  }
  show5(){
    this.visible5=!this.visible5
  }
  

  
  

}
