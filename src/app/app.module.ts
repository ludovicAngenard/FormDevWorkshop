import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalPlanningComponent } from './modal-planning/modal-planning.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalScrollComponent } from './modal-scroll/modal-scroll.component';
import { TableModule } from 'primeng/table';
import { UnderlineTitleComponent } from './underline-title/underline-title.component';
import { SignaturePadComponent } from './signature-pad/signature-pad.component';
import { AngularSignaturePadModule } from '@almothafar/angular-signature-pad';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { ModuleDetailsComponent } from './module-details/module-details.component';

import { CardModule } from 'primeng/card';
import {DividerModule} from 'primeng/divider';

@NgModule({
  declarations: [
    AppComponent,
    ModalPlanningComponent,
    ModalScrollComponent,
    UnderlineTitleComponent,
    SignaturePadComponent,
    ModuleDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    TableModule,
    AngularSignaturePadModule,
    SelectButtonModule,
    FormsModule,
    DividerModule,
    CardModule,
  ],
  exports:  [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
