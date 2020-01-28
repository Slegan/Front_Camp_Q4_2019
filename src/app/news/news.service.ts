import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { News } from './news';
import { NEWS, state } from './mock-news';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  newsCollection

  constructor() { }

  getNews(): Observable<News[]> {
    this.newsCollection = of(NEWS);
    return this.newsCollection;
  }

  returnCollection() {
    return this.newsCollection;
  }

  getRealNews(realNews: News[]) {
    state.splice(0, state.length);
    realNews.forEach(elem => state.push(elem));
    this.newsCollection = of([].concat(state));
  }

  getAllNews(realNews: News[]) {
    state.splice(0, state.length);
    realNews.forEach(elem => state.push(elem));
    this.newsCollection = of(NEWS.concat(state));
  }

  getPost(title: string) {
    const result = NEWS.filter(post => post.title === title);
    NEWS.splice(NEWS.findIndex(post => post.title === title), 1);
    return result[0];
  }

  addPost(post: News) {
    NEWS.push(post);
  }

  deletePost(post: News) {
    NEWS.splice(NEWS.findIndex(elem => elem === post), 1);
  }
}
