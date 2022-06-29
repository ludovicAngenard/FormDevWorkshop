import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalPlanningComponent } from './modal-planning/modal-planning.component';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ModalScrollComponent } from './modal-scroll/modal-scroll.component';
import {TableModule} from 'primeng/table';
import { UnderlineTitleComponent } from './underline-title/underline-title.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalPlanningComponent,
    ModalScrollComponent,
    UnderlineTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    TableModule
  ],
  exports:  [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
