import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-modal-planning',
  templateUrl: './modal-planning.component.html',
  styleUrls: ['./modal-planning.component.scss'],
})
export class ModalPlanningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  display: boolean = false;

  showDialog() {
      this.display = true;
  }


    balanceFrozen: boolean = false;

    rowGroupMetadata: any;



}


