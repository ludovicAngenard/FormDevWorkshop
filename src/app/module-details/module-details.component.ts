import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-details',
  templateUrl: './module-details.component.html',
  styleUrls: ['./module-details.component.scss']
})
export class ModuleDetailsComponent implements OnInit {
  title = 'Workshop - DEV';
  place = '1 rue Pierre Adolphe Bobierre - Salle 102';
  start_date = () : string => {
    let currentDate = new Date();
    let cDay = currentDate.getDate() -1;
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
    return `${cDay}/${cMonth}/${cYear}`;
  };
  end_date = () : string => {
    let currentDate = new Date();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
    return `${cDay}/${cMonth}/${cYear}`;
  };
  description = 'Ceci n\'est pas une description';
  last_name = 'Le Moine';
  first_name = 'Christian';
  constructor() { }

  ngOnInit(): void {
  }
}
