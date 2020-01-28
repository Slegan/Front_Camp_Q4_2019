import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import constants from './constant';

@Injectable({
  providedIn: 'root',
})
export class NewsAPIService {

  constructor(
    private http: HttpClient
  ) { }

  getList() {
    return this.http.get(`https://newsapi.org/v2/sources?language=en&apiKey=${constants.apiKey}`)
  }

  getChannel(channelID) {
    if (channelID === 'top-headlines') {
      return this.http.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${constants.apiKey}`);
    } else {
      return this.http.get(`https://newsapi.org/v2/everything?sources=${channelID}&pageSize=100&apiKey=${constants.apiKey}`);
    }
  }
}
