import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin from '@fullcalendar/interaction';
import { PlanningComponent } from './planning.component';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
//   interactionPlugin
]);

@NgModule({
  declarations: [
    PlanningComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [PlanningComponent]
})
export class AppModule { }