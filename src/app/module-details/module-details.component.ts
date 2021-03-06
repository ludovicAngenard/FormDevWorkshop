import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dataModules } from 'src/data/modules';

@Component({
  selector: 'app-module-details',
  templateUrl: './module-details.component.html',
  styleUrls: ['./module-details.component.scss']
})
export class ModuleDetailsComponent implements OnInit {
  id: number = 0;
  students = dataModules;

  findModuleById = () : any => {
    let result = {};
    dataModules.forEach(module => {
      if (module.id == this.id){
        result = module;
      }
    });
    return result;
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.id = parseInt(this.router.url.split('/')[2]);
  }
}
