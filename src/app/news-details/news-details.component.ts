import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NewsService }  from '../news/news.service';
import { News } from '../news/news';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  post: News;

  constructor(
    private route: ActivatedRoute,
    private service: NewsService
  ) { }

  ngOnInit() {
    this.post = this.service.getPost(this.route.snapshot.params.title);
  }

  
  logDelete(): void {
    console.log('Delete function coming soon');
  }

}
