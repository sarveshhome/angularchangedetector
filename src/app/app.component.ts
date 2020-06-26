import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  Counter={
    count:1
  }

  ngOnInit(){
  }
  incCont(){
    // this.Counter.count = this.Counter.count +1;
    // console.log(this.Counter.count);
    this.Counter={
      count: this.Counter.count +1
    }

  }

}
