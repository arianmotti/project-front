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
  speeches = ['«ظرفیت انسان برای پذیرش امید، شگفت‌انگیزترین حقیقت زندگی است. امید، برای بشر یک مقصد واضح مشخص می‌کند و انرژی لازم را برای شروع کردن به او می‌دهد.',
    'امیدتان را که از دست بدهید، انگار همه‌چیز را از دست داده‌اید. البته حتی زمانی که فکر می‌کنید همه چیز از دست رفته است، باز هم امید وجود دارد.',
    'امید مانند ستونی است که جهان را سرپا نگه می‌دارد. امید، رؤیای انسان بیدار است.',
    'از دیروز درس بگیر، برای امروز، زندگی کن و به فردا امیدوار باش. مهم‌ترین چیز این است که از پرسیدن دست نکشی.',
    'شما آنچه فکر می کنید احساس می کنید لذا شما می توانید یاد بگیرید در مورد هر چیزی متفاوت فکر نمایید و تصمیم بگیرید.',
    ' اتفاق اول بايد در درون من رخ دهد تا تكرار آن را در دنياي بيرون ببینم.',
    'موفقیت از آن کسانی است که یک ثانیه دیرتر نا امید می‌شوند و یک لحظه دیرتر دست از تلاش بر می‌دارند.',
    'حتی تاریک‌ترین شب‌ها به پایان خواهد رسید و سپبده دم بار دیگر طلوع خواهد کرد.'


  ]
  speech: String
  firstTime : boolean
  showMap : boolean 
  showKey : boolean
  showTreasure: boolean
  showDialog : boolean

  constructor(public authService: AuthService, private router: Router) {

  }



  ngOnInit(): void {
    this.showMap = true
    this.firstTime = true;
    this.showKey = false;
    // this.showTreasure = false;
    this.showTreasure= true;
    this.showDialog = false;
    // Get the elements
    const avatar1 = document.getElementById("avatar1");
    const planet1 = document.getElementById("planet1");
    const avatar2 = document.getElementById("avatar2");
    const planet2 = document.getElementById("planet2");
    const avatar3 = document.getElementById("avatar3");
    const planet3 = document.getElementById("planet3");
    const avatar4 = document.getElementById("avatar4");
    const planet4 = document.getElementById("planet4");
    const avatar5 = document.getElementById("avatar5");
    const planet5 = document.getElementById("planet5");
    const avatar6 = document.getElementById("avatar6");
    const planet6 = document.getElementById("planet6");
    if (avatar1 !== null && planet1 !== null && avatar2 !== null && planet2 !== null && avatar3 !== null && planet3 !== null
      && avatar4 !== null && planet4 !== null && avatar5 !== null && planet5 !== null && avatar6 !== null && planet6 !== null) {
      avatar1.classList.remove("hidden");
      planet1.classList.remove("hidden");
      setTimeout(() => {
        avatar1.classList.add("hidden");
        avatar3.classList.remove("hidden");
        planet3.classList.remove("hidden");
        planet2.classList.add("hidden");
      }, 5000);
      setTimeout(() => {
        avatar3.classList.add("hidden");
        avatar2.classList.remove("hidden");
        planet2.classList.remove("hidden");
        planet1.classList.add("hidden");
      }, 2500);
      setTimeout(() => {
        avatar4.classList.remove("hidden");
        avatar2.classList.add("hidden");
        avatar3.classList.add("hidden")
        planet4.classList.remove("hidden");
        planet3.classList.add("hidden");
      }, 7500);
      setTimeout(() => {
        avatar4.classList.add("hidden")
        avatar5.classList.remove("hidden");
        planet5.classList.remove("hidden");
        planet4.classList.add("hidden");
      }, 10000);
      setTimeout(() => {
        avatar5.classList.add("hidden")
        avatar6.classList.remove("hidden");
        planet6.classList.remove("hidden");
        planet5.classList.add("hidden");
      }, 12500);
      setTimeout(() => {
      
        avatar6.classList.add("hidden");
        planet6.classList.add("hidden");
     
      }, 15000);
     
      setTimeout(() => {
        planet1.classList.remove("hidden");
        planet2.classList.remove("hidden");
        planet3.classList.remove("hidden");
        planet4.classList.remove("hidden");
        planet5.classList.remove("hidden");
        planet6.classList.remove("hidden");
        
        
      }, 15500);
      
      setTimeout(() => {
        this.firstTime = false
        avatar1.classList.remove("hidden");
        
      }, 17000);
      setTimeout(() => {
        avatar1.classList.add("hidden");
        avatar2.classList.remove("hidden");
        
      }, 19000);
      setTimeout(() => {
        avatar2.classList.add("hidden");
        avatar3.classList.remove("hidden");
        
      }, 21000);
      setTimeout(() => {
        avatar3.classList.add("hidden");
        avatar4.classList.remove("hidden");
        
      }, 23000);
      setTimeout(() => {
        avatar4.classList.add("hidden");
        avatar5.classList.remove("hidden");
        
      }, 25000);
      setTimeout(() => {
        avatar5.classList.add("hidden");
        avatar6.classList.remove("hidden");
        
      }, 25000);
      setTimeout(() => {
        avatar6.classList.add("hidden");
        
      }, 27000);
     
    
      
    }



    this.speech = this.speeches[Math.floor(Math.random() * this.speeches.length)];
  }
  map(){
    this.showMap= false;
    this.showKey= true;
  }
  key(){
    this.showKey = false;
    this.showTreasure = true;
  }
  treasure(){
    this.showTreasure = false;
    this.showDialog = true;
  }
  closeDialog() {
    // Hide the dialog box
    this.showDialog = false;

    // Show the treasure image
    // this.showTreasure = true;
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  education() {
    this.router.navigateByUrl('/education');
  }
  entertain() {
    this.router.navigateByUrl('/entertain');
  }
  forum(title: string, transform: string) {
    this.targetTransform = transform + ' scale(0.75) rotate(0deg)'
    this.targetAnimation = 'float 3s 1'
    this.authService.visit(title)
    setTimeout(() => {
      this.authService.sectionTitle = `به سیاره‌ی ${title} خوش اومدی`
      if (title == 'مشاوره')
        this.router.navigateByUrl('/forum');
      else if (title == 'پنج کار')
        this.router.navigateByUrl('/home');
      else if (title == 'mbti')
        this.router.navigateByUrl('/mbti');
      else if (title == 'disc')
        this.router.navigateByUrl('/disc');
    }, 1200);

  }

}
