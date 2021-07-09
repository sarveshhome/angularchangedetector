import { Component, VERSION, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  _count =1;
  Counter :any;


  // Counter={
  //   count:1
  // }

  ngOnInit(){
    this.Counter = new BehaviorSubject({
       count: 0
    })
  }  
  incCont(){
    // this.Counter.count = this.Counter.count +1;
    // console.log(this.Counter.count);
    // this.Counter={
    //   count: this.Counter.count +1
    // }
    this.Counter.next({
       count :++this._count 
    })
     
  }

}
