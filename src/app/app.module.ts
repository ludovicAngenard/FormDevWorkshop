import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleDetailsComponent } from './module-details/module-details.component';

import { CardModule } from 'primeng/card';
import {DividerModule} from 'primeng/divider';

@NgModule({
  declarations: [
    AppComponent,
    ModuleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DividerModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
