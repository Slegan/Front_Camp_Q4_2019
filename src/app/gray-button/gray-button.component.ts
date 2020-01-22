import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gray-button',
  templateUrl: './gray-button.component.html',
  styleUrls: ['./gray-button.component.css']
})
export class GrayButtonComponent implements OnInit {
  @Input() buttonTitle: string;
  la = 'asdasd'
  constructor() {
  }
  
  ngOnInit() {
  }

}
