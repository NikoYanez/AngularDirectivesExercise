import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {

  secretPassword = 'Secret Password: TobyRulez';
  displayClass = 'hidden-lg';
  currentlyDisplayed = 'Not Displayed';
  buttonValue = 'Display Details';
  buttonPressCount = [0];
  backgroundColor = '';
  count = 0;

  constructor() {
  }

  ngOnInit() {
  }

  getClass() {
    this.displayClass = this.currentlyDisplayed === 'Not Displayed' ? 'hidden-lg ' : 'visible-lg ';
    return this.displayClass;
  }

  toggleDisplay() {
    this.currentlyDisplayed = this.currentlyDisplayed === 'Not Displayed' ? 'Displayed' : 'Not Displayed';
    this.buttonPressCount.push(this.count += 1);
    console.log(this.buttonPressCount);
  }

  getButtonValue() {
    this.buttonValue = this.currentlyDisplayed === 'Not Displayed' ? 'Display Details' : 'Hide Details';
    return this.buttonValue;
  }

  getStyle() {
    if (this.count >= 5) {
      this.backgroundColor = 'cornflowerblue';
      return this.backgroundColor;
    }
  }

}
