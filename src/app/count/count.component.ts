import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  title :string = 'I am Count Component';
  height =100;
  constructor() { }

  ngOnInit(): void {
  }

}
