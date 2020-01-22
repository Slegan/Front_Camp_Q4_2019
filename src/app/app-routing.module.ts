import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexPageComponent } from './index-page/index-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SelfPresentationComponent } from './self-presentation/self-presentation.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/Main', pathMatch: 'full' },
  { path: 'Main', component: IndexPageComponent },
  { path: 'Contact',   component: SelfPresentationComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/