import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainboxComponent } from './mainbox/mainbox.component';
import { NewsPreviewComponent } from './news-preview/news-preview.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexPageComponent } from './index-page/index-page.component';
import { SelfPresentationComponent } from './self-presentation/self-presentation.component';
import { GrayButtonComponent } from './gray-button/gray-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainboxComponent,
    NewsPreviewComponent,
    NotFoundPageComponent,
    NewsDetailsComponent,
    IndexPageComponent,
    SelfPresentationComponent,
    GrayButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot([
    //   { path: '', component: HeaderComponent },
    //   { path: 'news/:mwesId', component: NewsDetailsComponent },
    //   { path: '404', component: NotFoundPageComponent },
    //   { path: '**', component: NotFoundPageComponent },
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router) {
  }
}
