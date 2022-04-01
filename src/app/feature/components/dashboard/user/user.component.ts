import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy{
  childData: string = "Data from chield component";
  intervalId = 0;
  message = '';
  seconds = 0;
  clearTimer() { clearInterval(this.intervalId); }

  @Input() item = []; 
  constructor() { }

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  ngOnInit() { 
    console.log('ng On Init')
    this.start(); }
  
  ngOnDestroy() { this.clearTimer(); }
  start() { this.countDown(); }

  stop() {
  this.clearTimer();
  this.message = `Holding at T-${this.seconds} seconds`;
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
    this.seconds += 1;
    if (this.seconds === 0) {
    this.message = 'Completed counting!';
    } else {
    if (this.seconds < 0) { this.seconds = 50; } // reset
    this.message = `Vote-${this.seconds} and counting going on`;
    }
    }, 1000);
    }


  

}
