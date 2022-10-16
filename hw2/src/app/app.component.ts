import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hw2';

  users = [
    {
      firstName: `John`,
      lastName: `Doe`,
      dept: `Finance`,
      salary: 5000,
      doj: new Date(`2015-12-11`),
    },
    {
      firstName: `Amy`,
      lastName: `Watson`,
      dept: `HR`,
      salary: 8000,
      doj: new Date(`2013-07-23`),
    },
    {
      firstName: `Shrishti`,
      lastName: `Sharma`,
      dept: `IT`,
      salary: 10000,
      doj: new Date(`2019-10-20`),
    },
  ];

  userInput: string = '';
  sortType: string = 'ascending';

  sortSwitch() {
    this.sortType === 'ascending'
      ? (this.sortType = 'descending')
      : (this.sortType = 'ascending');
  }

  reset(){
    this.userInput= '';
    this.sortType = 'ascending'
  }
}
