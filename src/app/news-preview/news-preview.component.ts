import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { News } from '../news/news'

@Component({
  selector: 'app-news-preview',
  templateUrl: './news-preview.component.html',
  styleUrls: ['./news-preview.component.css']
})
export class NewsPreviewComponent implements OnInit {
  @Input() post: News;
  buttonTitle: string;
  publishDay: number;
  publishMonth: number;
  publishYear: number;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const date = new Date(this.post.publishedAt);
    this.publishDay = date.getDay();
    this.publishMonth = date.getMonth();
    this.publishYear = date.getFullYear();
  }

}
