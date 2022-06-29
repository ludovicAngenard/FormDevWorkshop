import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-modal-planning',
  templateUrl: './modal-planning.component.html',
  styleUrls: ['./modal-planning.component.scss'],
})
export class ModalPlanningComponent implements OnInit {

  stateOptions: any[];

  paymentOptions: any[];

  justifyOptions: any[];

  value1: string = 'off';

  value2!: number;

  value3: any;
  
  balanceFrozen: boolean = false;

  rowGroupMetadata: any;


  constructor(private primeNGConfig: PrimeNGConfig) { 
    this.stateOptions = [
      { label: 'Off', value: 'off' },
      { label: 'On', value: 'on' },
    ];

    this.paymentOptions = [
      { name: 'QR Code', value: 1 },
      { name: 'E-mail', value: 2 },
      { name: 'Signature numérique', value: 3 },
    ];

    this.justifyOptions = [
      { icon: 'pi pi-align-left', justify: 'Left' },
      { icon: 'pi pi-align-right', justify: 'Right' },
      { icon: 'pi pi-align-center', justify: 'Center' },
      { icon: 'pi pi-align-justify', justify: 'Justify' },
    ];

  }

  ngOnInit(): void {
    this.primeNGConfig.ripple = true;
  }

  display: boolean = false;

  showDialog() {
      this.display = true;
  }

}


