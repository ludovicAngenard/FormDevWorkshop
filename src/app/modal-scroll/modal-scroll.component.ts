import { Component, OnInit } from '@angular/core';
import { dataStudents } from 'src/data/students';


@Component({
  selector: 'app-modal-scroll',
  templateUrl: './modal-scroll.component.html',
  styleUrls: ['./modal-scroll.component.scss']
})
export class ModalScrollComponent implements OnInit {
  students: any[] = [];
  title: string = "Participants";

    constructor() { }

    ngOnInit(): void {

      this.students = dataStudents

    }
    findStudentsColor(student:any): string {
      let color = '';
      if (student.sign_status == 'await'){
        color = 'text-gray-600';
      } else if (student.sign_status == 'missing'){
        color = 'text-pink-600';
      } else if (student.sign_status == 'valid'){
        color = 'text-green-600';
      }
      return color
    }


}
