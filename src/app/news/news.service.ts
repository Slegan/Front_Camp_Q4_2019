import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { News } from './news';
import { NEWS } from './mock-news';

@Injectable({
  providedIn: 'root',
})
export class NewsService {

  constructor() { }

  getNews(): Observable<News[]> {
    return of(NEWS);
  }

  getPost(title: string) {
    const result = NEWS.filter(post => post.title === title);
    return result[0];
    // return this.getNews().pipe(
    //   map((news: News[]) => news.find(post => post.title === title))
    // );
  }
}
