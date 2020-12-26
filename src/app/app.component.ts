import { Component } from '@angular/core';
import { differenceInMinutes, differenceInHours } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Time Entry';
  timeIn: Date = new Date();
  timeOut: Date = new Date();
  isMeridian: boolean = false;
  minTime: Date = new Date();
  maxTime: Date = new Date();

  dataSource: any = [];

  constructor() {}

  ngOnInit() {}

  onSave() {}

  Addentry() {
    console.log(`in and out`, this.timeIn, this.timeOut);
    let diffHours = differenceInHours(this.timeIn, this.timeOut);
    let diffMinutes = differenceInMinutes(this.timeIn, this.timeOut);

    let duration = `${Math.abs(diffHours)}: ${
      Math.abs(diffMinutes) % 2 == 0 ? '00' : Math.abs(diffMinutes)
    }`;

    console.log(`duration`, duration);

    let el = {
      in: this.timeIn,
      out: this.timeOut,
      duration: duration,
    };
    this.dataSource.push(el);
  }
}
