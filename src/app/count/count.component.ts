import { Component, OnInit, ChangeDetectorRef,Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css'],
  // changeDetection:ChangeDetectionStrategy.Default
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CountComponent implements OnInit {
  title :string = 'I am Count Component';
  height =100;

  @Input() Counter;
  constructor(private cd: ChangeDetectorRef) {
    //this.cd.detach();
   }

  ngOnInit(): void {
    setInterval(()=>{
      if(this.height ==300)
      {
        this.height =30;
      }
      this.height = this.height + 10;
    },100)
  }

}
