import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

@Component({
  standalone: true,
  imports: [
    InputTextModule,
    CommonModule,
    ButtonModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent implements OnInit {

  constructor() { }

  qrcode:boolean = true

  ngOnInit(): void {
  }

}
