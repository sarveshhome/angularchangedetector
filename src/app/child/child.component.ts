import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  message : string ='i am child component';
  
  constructor() { }

  ngOnInit(): void {
  }

}
