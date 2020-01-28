import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainboxComponent } from './mainbox/mainbox.component';
import { NewsPreviewComponent } from './news-preview/news-preview.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexPageComponent } from './index-page/index-page.component';
import { SelfPresentationComponent } from './self-presentation/self-presentation.component';
import { GrayButtonComponent } from './gray-button/gray-button.component';
import { NewsDetailsPageComponent } from './news-details-page/news-details-page.component';
import { CreateEditPageComponent } from './create-edit-page/create-edit-page.component';
import { CreateEditFormComponent } from './create-edit-form/create-edit-form.component';
import { DatePipeComponent } from './date-pipe/date-pipe.component';
import { CustomFilterPipe } from './custom-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainboxComponent,
    NewsPreviewComponent,
    NotFoundPageComponent,
    NewsDetailsComponent,
    IndexPageComponent,
    SelfPresentationComponent,
    GrayButtonComponent,
    NewsDetailsPageComponent,
    CreateEditPageComponent,
    CreateEditFormComponent,
    DatePipeComponent,
    CustomFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router) {
  }
}
