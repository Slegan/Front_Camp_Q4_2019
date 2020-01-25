import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Channels } from './channels';
import { CHANNELS } from './mock-channels';

@Injectable({
  providedIn: 'root',
})
export class ChannelsService {

  constructor() { }

  getChannels(): Observable<Channels[]> {
    return of(CHANNELS);
  }

  getChannel(id: string) {
    return this.getChannels().pipe(
      map((channels: Channels[]) => channels.find(channel => channel.id === id))
    );
  }
}
