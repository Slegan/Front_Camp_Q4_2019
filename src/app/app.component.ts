import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
// import { createCustomElement } from '@angular/elements';

// import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FC-angular';

  constructor(injector: Injector, router: Router) {
    // const FooterElement = createCustomElement(FooterComponent, {injector});
    // customElements.define('footer-element', FooterComponent);
  }
}
