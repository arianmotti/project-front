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
  
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.speech = this.speeches[Math.floor(Math.random() * this.speeches.length)];
  }
  
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
	
	education(){
    this.router.navigateByUrl('/education');
	}
	entertain(){
    this.router.navigateByUrl('/entertain');
	}
	forum(title:string, transform:string){
		this.targetTransform = transform + ' scale(0.75) rotate(0deg)'
		this.targetAnimation = 'float 3s 1'
		this.authService.visit(title)
		setTimeout(()=>{
			this.authService.sectionTitle = `به سیاره‌ی ${title} خوش اومدی`
			if(title=='پنج کار')
				this.router.navigateByUrl('/home');
      else if(title=='mbti')
				this.router.navigateByUrl('/mbti');
      if(title=='disc')
        this.router.navigateByUrl('/disc');
		}, 1200);
	}
}
