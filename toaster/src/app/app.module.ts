import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ToastaModule } from 'ngx-toasta';

import { AppComponent } from './app.component';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    ToastaModule.forRoot(),
  ],
  providers: [],
  bootstrap: []
})
export class AppModule implements DoBootstrap {

  constructor(
    injector: Injector
  ) {
    const toastComponent = createCustomElement(ToastComponent, {injector});
    customElements.define('cj-toaster', toastComponent);
  }

  ngDoBootstrap() {

  }
}
