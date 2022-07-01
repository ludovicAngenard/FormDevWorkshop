import { Component } from "@angular/core";
import { CalendarOptions } from "@fullcalendar/angular";

@Component({
    standalone: true,
    selector: "app-planning",
    templateUrl: "./planning.component.html",
    styleUrls: ["./planning.component.scss"],
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
