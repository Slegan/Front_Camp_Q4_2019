import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import { ChannelsService } from '../channels/channels.service';
import { Channels } from '../channels/channels';
import { NewsAPIService } from '../newAPIservice/newsAPI.service';
import { NewsService } from '../news/news.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // channels$: Observable<Channels[]>;
  sourceName = 'Source Name';
  isMainPage: boolean;
  // listOfSource: Promise<Channels[]>;
  listOfSource: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    // private service: ChannelsService,
    private apiService: NewsAPIService,
    private customNewsService: NewsService
  ) { }

  ngOnInit() {
    this.isMainPage = (this.route.snapshot.routeConfig.path === 'Main');
    // this.channels$ = this.service.getChannels();
    this.apiService.getList().subscribe((data: any) => {
      this.listOfSource = data.sources
    });
  }

  selectChannel(channelID: string) {
    this.apiService.getChannel(channelID).subscribe((data: any) => {
      if (channelID === 'top-headlines') {
        this.customNewsService.getAllNews(data.articles)
      } else {
        this.customNewsService.getRealNews(data.articles)
      }
    });;
    
  }

}
