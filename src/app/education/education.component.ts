import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  highschool: string = "F.J. Reitz, 1989";
  college: string = "IU, 1993";

  constructor() { }

  ngOnInit() {
  }

}
