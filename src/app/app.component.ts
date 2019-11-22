import { Component } from '@angular/core';
import { Stuffy } from './model/stuffy.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My CV';
  myName = 'Sean Blessing';
  myPhone = '513-600-7096';
  myEmail = 'sean@blessingtechnology.com';
  displayWork:boolean = false;
  displayEdu:boolean = false;

  numbers: number[] = [1,2,3,4,5,6,7];

  hireMe(): void {
    this.displayWork = true;
    this.displayEdu = true;
    console.log(this.myName+" got a job offer.  Yee haw!");
    let s: Stuffy = new Stuffy(1, "Cat", "Blue", "Large", 4);
    console.log(s);
  }
}
