import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import {Router} from "@angular/router"

@Component({
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    DialogModule,
    CommonModule,
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})

export class ConnexionComponent {
  
  constructor(private router: Router) { }

  register:boolean = true;

  handleClick() {
    this.register = !this.register
  }

  redirect() {
    this.router.navigate(['/'])

  }

}
