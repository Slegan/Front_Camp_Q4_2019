import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  templateUrl: './date-pipe.component.html',
  styleUrls: ['./date-pipe.component.css']
})
export class DatePipeComponent implements OnInit {
  @Input() date: string;
  day: Date;

  ngOnInit() {
    //show Invalid Date error on console, but works fine...
    this.day = new Date(this.date);
  }
}
