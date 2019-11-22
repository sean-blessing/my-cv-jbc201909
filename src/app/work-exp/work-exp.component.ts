import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.css']
})
export class WorkExpComponent implements OnInit {
  trainer: string = "Sr. Instructor, MAX Train, 2016 - present";
  kroger: string = "Manager, Kroger, 2005 - 1016";
  fusion: string = "Sr. Consultant, Fusion Alliance, 2001 - 2005";

  constructor() { }

  ngOnInit() {
  }

}
