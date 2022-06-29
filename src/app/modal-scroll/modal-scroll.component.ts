import { Component, OnInit } from '@angular/core';
import { dataCustomers } from 'src/data/customers';


@Component({
  selector: 'app-modal-scroll',
  templateUrl: './modal-scroll.component.html',
  styleUrls: ['./modal-scroll.component.scss']
})
export class ModalScrollComponent implements OnInit {
  customers: any[] = [];

  title: string = "Participants"

    constructor() { }

    ngOnInit(): void {

      this.customers = dataCustomers

    }
  

}
