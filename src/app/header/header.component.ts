import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ChannelsService } from '../channels/channels.service'
import { Channels } from '../channels/channels'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  channels$: Observable<Channels[]>;
  sourceName = 'Source Name';
  isMainPage: boolean;

  constructor(
    private route: ActivatedRoute,
    private service: ChannelsService,
  ) { }

  ngOnInit() {
    this.isMainPage = (this.route.snapshot.routeConfig.path === 'Main');
    this.channels$ = this.service.getChannels();
  }

}
