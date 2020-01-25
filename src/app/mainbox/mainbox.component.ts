import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { NewsService } from '../news/news.service'
import { News } from '../news/news'

@Component({
  selector: 'app-mainbox',
  templateUrl: './mainbox.component.html',
  styleUrls: ['./mainbox.component.css']
})
export class MainboxComponent implements OnInit {
  news$: Observable<News[]>;

  constructor(
    private service: NewsService
  ) { }

  ngOnInit() {
    this.news$ = this.service.getNews();
    console.log(this.news$);
  }

}
