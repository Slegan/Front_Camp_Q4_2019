import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import { news } from '../news';

@Component({
  selector: 'app-news-preview',
  templateUrl: './news-preview.component.html',
  styleUrls: ['./news-preview.component.css']
})
export class NewsPreviewComponent implements OnInit {
  buttonTitle: string;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   this.news = news[+params.get('newsId')];
    // });
  }

}
