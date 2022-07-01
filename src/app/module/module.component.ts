import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { SignaturePadModule } from 'angular2-signaturepad';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {FieldsetModule} from 'primeng/fieldset';
import { dataModules } from 'src/data/modules';
import {Router} from "@angular/router"

@Component({
  standalone: true,
  imports: [
    InputTextModule,
    CommonModule,
    ButtonModule,
    SignaturePadModule,
    FieldsetModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {

  constructor(private router: Router) { }

  students = dataModules;

  ngOnInit(): void {
  }

  redirect(id: number) {
    this.router.navigate(['modules/' + id])
  }

}
