import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CalendarOptions } from "@fullcalendar/angular";

@Component({
    standalone: true,
    selector: "app-planning",
    templateUrl: "./planning.component.html",
    styleUrls: ["./planning.component.scss"],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ],
})

export class PlanningComponent {
    calendarOptions: CalendarOptions = {
        initialView: "dayGridMonth",
        editable: true,
        events: [
            {
                title: "All Day Event",
                start: "2019-01-01",
            },
            {
                title: "Long Event",
                start: "2019-01-07",
                end: "2019-01-10",
            },
        ],
    };
}
