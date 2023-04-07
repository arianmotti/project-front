import { Component, OnInit } from '@angular/core';
import { max } from 'rxjs';

@Component({
  selector: 'app-disc',
  templateUrl: './disc.component.html',
  styleUrls: ['./disc.component.css']
})
export class DISCComponent implements OnInit {
  currentPage = 1;
  itemsPerPage = 1;
  result = ''
  allnotanswered = false
  answers = Array(28).fill(null)
  answers2 = Array(28).fill(null)
  questions = [
    {
      text : 'کدام یک از ویژگی های زیر را بیشتر از در خود می بینید؟',
      text2 : 'کدام یک از ویژگی ها زیر را کمتر در خود می بینید؟',
      answer1: 'شجاعت',
      answer2: 'اشتیاق',
      answer3:'راضی',
      answer4:'دیپلماتیک',
      
    },
    {
      text : 'کدام یک از ویژگی های زیر را بیشتر از در خود می بینید؟',
      text2 : 'کدام یک از ویژگی ها زیر را کمتر در خود می بینید؟',
      answer1: 'قانع کننده',
      answer2: 'اشتیاق',
      answer3:'خوش خلق',
      answer4:'محتاط',
      
    },
    {
      text : 'کدام یک از ویژگی های زیر را بیشتر از در خود می بینید؟',
      text2 : 'کدام یک از ویژگی ها زیر را کمتر در خود می بینید؟',
      answer1: 'صریح',
      answer2: 'دوستانه',
      answer3:'آرام ',
      answer4:'دقیق',
      
    },
    {
      text : 'کدام یک از ویژگی های زیر را بیشتر از در خود می بینید؟',
      text2 : 'کدام یک از ویژگی ها زیر را کمتر در خود می بینید؟',
      answer1: 'قاطع',
      answer2: 'پر حرف',
      answer3:' مرسوم',
      answer4:'کنترل شده',
      
    },
    {
      text : 'کدام یک از ویژگی های زیر را بیشتر از در خود می بینید؟',
      text2 : 'کدام یک از ویژگی ها زیر را کمتر در خود می بینید؟',
      answer1: 'پر ماجرا',
      answer2: 'برونگرا',
      answer3:'معتدل',
      answer4:'با بصیرت',
      
    },
    {
      text : 'کدام یک از ویژگی های زیر را بیشتر از در خود می بینید؟',
      text2 : 'کدام یک از ویژگی ها زیر را کمتر در خود می بینید؟',
      answer1: 'اصیل',
      answer2: 'متقاعد کننده',
      answer3:'ملایم',
      answer4:'فروتن',
      
    },
    {
      text : 'کدام یک از ویژگی های زیر را بیشتر از در خود می بینید؟',
      text2 : 'کدام یک از ویژگی ها زیر را کمتر در خود می بینید؟',
      answer1: 'قدرتمند',
      answer2: 'رسا',
      answer3:'با وجدان',
      answer4:'نکته بین',
      
    },
    {
      text : 'کدام یک از ویژگی های زیر را بیشتر از در خود می بینید؟',
      text2 : 'کدام یک از ویژگی ها زیر را کمتر در خود می بینید؟',
      answer1: 'بی صبر',
      answer2: 'بیانگر',
      answer3:'فروتن',
      answer4:'ناظر',
      
    },
    {
      text : 'کدام یک از ویژگی های زیر را بیشتر از در خود می بینید؟',
      text2 : 'کدام یک از ویژگی ها زیر را کمتر در خود می بینید؟',
      answer1: 'مصر',
      answer2: 'جذاب',
      answer3:'تایید کننده',
      answer4:'با درایت',
      
    },
    {
      text : 'کدام یک از ویژگی های زیر را بیشتر از در خود می بینید؟',
      text2 : 'کدام یک از ویژگی ها زیر را کمتر در خود می بینید؟',
      answer1: 'شجاع',
      answer2: 'الهام بخش',
      answer3:'مطیع',
      answer4:'محافظه کار',
      
    },
    {
      text : 'کدام یک از ویژگی های زیر را بیشتر از در خود می بینید؟',
      text2 : 'کدام یک از ویژگی ها زیر را کمتر در خود می بینید؟',
      answer1: 'با اراده',
      answer2: 'شاد',
      answer3:'مکلف',
      answer4:'برنامه ریز',
      
    },
    {
      text : 'کدام یک از ویژگی های زیر را بیشتر از در خود می بینید؟',
      text2 : 'کدام یک از ویژگی ها زیر را کمتر در خود می بینید؟',
      answer1: 'مستقل',
      answer2: 'تحریک کننده',
      answer3:'مهربان',
      answer4:'با بصیرت',
      
    },
    {
      text : 'کدام یک از ویژگی های زیر را بیشتر از در خود می بینید؟',
      text2 : 'کدام یک از ویژگی ها زیر را کمتر در خود می بینید؟',
      answer1: 'رقابتی',
      answer2: 'شادی آور',
      answer3:'محافظه کار',
      answer4:'باور به فردیت',
      
    },
    {
      text : 'کدام یک از ویژگی های زیر را بیشتر از در خود می بینید؟',
      text2 : 'کدام یک از ویژگی ها زیر را کمتر در خود می بینید؟',
      answer1: 'محکم',
      answer2: 'بازیگوش',
      answer3:'مطیع',
      answer4:'منتقد',
      
    },
    {
      text : 'کدام یک از ویژگی های زیر را بیشتر از در خود می بینید؟',
      text2 : 'کدام یک از ویژگی ها زیر را کمتر در خود می بینید؟',
      answer1: 'یک دنده',
      answer2: 'جذاب',
      answer3:'قابل حدس',
      answer4:'درون نگر',
      
    },
    {
      text : 'کدام یک از ویژگی های زیر را بیشتر از در خود می بینید؟',
      text2 : 'کدام یک از ویژگی ها زیر را کمتر در خود می بینید؟',
      answer1: 'پررنگ',
      answer2: 'جذاب',
      answer3:'وفادار',
      answer4:'منطقی',
      
    },
    {
      text : 'کدام یک از ویژگی های زیر را بیشتر از در خود می بینید؟',
      text2 : 'کدام یک از ویژگی ها زیر را کمتر در خود می بینید؟',
      answer1: 'متکی به خود',
      answer2: 'دوستانه',
      answer3:'صبور',
      answer4:'صریح',
      
    },
    {
      text : 'کدام یک از ویژگی های زیر را بیشتر از در خود می بینید؟',
      text2 : 'کدام یک از ویژگی ها زیر را کمتر در خود می بینید؟',
      answer1: 'مشتاق',
      answer2: 'روحیه ی بالا',
      answer3:'مایل',
      answer4:'کمال گرا',
      
    },
    {
      text : 'کدام یک از ویژگی های زیر را بیشتر از در خود می بینید؟',
      text2 : 'کدام یک از ویژگی ها زیر را کمتر در خود می بینید؟',
      answer1: 'خشن',
      answer2: 'برونگرا',
      answer3:'دوست داشتنی',
      answer4:'ترسناک',
      
    },
    {
      text : 'کدام یک از ویژگی های زیر را بیشتر از در خود می بینید؟',
      text2 : 'کدام یک از ویژگی ها زیر را کمتر در خود می بینید؟',
      answer1: 'اظهار کننده',
      answer2: 'مطمئن',
      answer3:'دلسوز',
      answer4:'بی طرف',
      
    },
    {
      text : 'کدام یک از ویژگی های زیر را بیشتر از در خود می بینید؟',
      text2 : 'کدام یک از ویژگی ها زیر را کمتر در خود می بینید؟',
      answer1: 'پایدار',
      answer2: 'متحرک',
      answer3:'سخاوتمند',
      answer4:'منضبط',
      
    },
    {
      text : 'کدام یک از ویژگی های زیر را بیشتر از در خود می بینید؟',
      text2 : 'کدام یک از ویژگی ها زیر را کمتر در خود می بینید؟',
      answer1: 'زورمند',
      answer2: 'تکانشی',
      answer3:'آسان گیر',
      answer4:'درون گرا',
      
    },
    {
      text : 'کدام یک از ویژگی های زیر را بیشتر از در خود می بینید؟',
      text2 : 'کدام یک از ویژگی ها زیر را کمتر در خود می بینید؟',
      answer1: 'پرشور',
      answer2: 'همزن خوب(good mixer)',
      answer3:'ملایم',
      answer4:'فیلتر شده',
      
    },
    {
      text : 'کدام یک از ویژگی های زیر را بیشتر از در خود می بینید؟',
      text2 : 'کدام یک از ویژگی ها زیر را کمتر در خود می بینید؟',
      answer1: 'مطالبه گر',
      answer2: 'فریبنده',
      answer3:'راضی',
      answer4:'سازگار',
      
    },
    {
      text : 'کدام یک از ویژگی های زیر را بیشتر از در خود می بینید؟',
      text2 : 'کدام یک از ویژگی ها زیر را کمتر در خود می بینید؟',
      answer1: 'استدلالی',
      answer2: 'با نشاط',
      answer3:'تعاونی',
      answer4:'منظم',
      
    },
    {
      text : 'کدام یک از ویژگی های زیر را بیشتر از در خود می بینید؟',
      text2 : 'کدام یک از ویژگی ها زیر را کمتر در خود می بینید؟',
      answer1: 'مستقیم',
      answer2: 'شاد کننده',
      answer3:'یک نواخت',
      answer4:'دقیق',
      
    },
    {
      text : 'کدام یک از ویژگی های زیر را بیشتر از در خود می بینید؟',
      text2 : 'کدام یک از ویژگی ها زیر را کمتر در خود می بینید؟',
      answer1: 'بی قرار',
      answer2: 'جذب کننده',
      answer3:'هم مسیر',
      answer4:'مراقب',
      
    },
    {
      text : 'کدام یک از ویژگی های زیر را بیشتر از در خود می بینید؟',
      text2 : 'کدام یک از ویژگی ها زیر را کمتر در خود می بینید؟',
      answer1: 'پیشگام',
      answer2: 'خوشبین',
      answer3:'مفید',
      answer4:'محترم',
      
    },
   
   
    ]

  
  constructor() { }

  ngOnInit(): void {
  }
  getQuestionsForCurrentPage() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = this.currentPage * this.itemsPerPage;
    return this.questions.slice(startIndex, endIndex);
  }

  getTotalPages() {
    return Math.ceil(this.questions.length / this.itemsPerPage);
  }
  calculate_disc(){
    if(this.answers.includes(null)){
      this.allnotanswered=true
    } else{
      // console.log(this.answers)
     var D=0
     var I=0
     var S=0
     var C=0
     for ( const element of this.answers) {
      if (element==="D+") {
        D++;
      }
      if (element==="I+") {
        I++;
      }
      if (element==="S+") {
        S++;
      }
      if (element==="C+") {
        C++;
      }
     }
     for ( const element of this.answers2) {
      if (element==="D-") {
        D--;
      }
      if (element==="I-") {
        I--;
      }
      if (element==="S-") {
        S--;
      }
      if (element==="C-") {
        C--;
      }
     }
    const max = Math.max(D,I,S,C);
    if (max===D) {
      this.result= 'D';
    }
    if (max===I) {
      this.result= 'I';
    }
    if (max===S) {
      this.result= 'S';
    }
    if (max===C) {
      this.result= 'C';
    }



  }
  }
}
