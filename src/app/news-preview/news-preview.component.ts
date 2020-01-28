import { Component, OnInit, Input } from '@angular/core';

import { NewsService }  from '../news/news.service';
import { News } from '../news/news'

@Component({
  selector: 'app-news-preview',
  templateUrl: './news-preview.component.html',
  styleUrls: ['./news-preview.component.css']
})
export class NewsPreviewComponent implements OnInit {
  @Input() post: News;
  buttonTitle: string;

  constructor(
    private service: NewsService
  ) { }

  ngOnInit() {
  }

  deletePost():void {
    this.service.deletePost(this.post);
  }

}
