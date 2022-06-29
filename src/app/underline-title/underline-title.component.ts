import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-underline-title',
  templateUrl: './underline-title.component.html',
  styleUrls: ['./underline-title.component.scss']
})
export class UnderlineTitleComponent implements OnInit {

  @Input() title!: string

  constructor() { }

  ngOnInit(): void {
  }

}
