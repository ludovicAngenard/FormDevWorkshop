import { Component, OnInit } from '@angular/core';
import { dataStudents } from 'src/data/students';
import { dataModules } from 'src/data/modules';
import { dataStudentsModules } from 'src/data/students_modules';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal-scroll',
  templateUrl: './modal-scroll.component.html',
  styleUrls: ['./modal-scroll.component.scss']
})
export class ModalScrollComponent implements OnInit {
  students: any[] = [];
  modules: any[] = [];
  studentsModules: any[] = [];
  title: string = "Participants";
  id: number = 0;
  constructor(private router: Router) { }

  ngOnInit(): void {

    this.students = dataStudents;
    this.modules = dataModules;
    this.studentsModules = dataStudentsModules;
    this.id = parseInt(this.router.url.split('/')[2]);
  }

  findModuleById = () : any => {
    let result = {};
    this.modules.forEach(module => {
      if (module.id == this.id){
        result = module;
      }
    });
    return result;
  }
  findStudentsByModule = () =>{
    let studentsModule = this.studentsModules.filter(studentModule => studentModule.module == this.findModuleById().id);
    return studentsModule
  }

  findColorByStudent = (student:any) : string => {
    let studentModule = this.findStudentsByModule().filter( studentModule => studentModule.student == student.id)
    let color: string = '';
    console.log(studentModule)
    if (studentModule[0] && studentModule[0].sign_status == 'await'){
      color = 'text-gray-600';
    } else if (studentModule[0] && studentModule[0].sign_status == 'missing'){
      color = 'text-pink-600';
    } else if (studentModule[0] && studentModule[0].sign_status == 'valid'){
      color = 'text-green-600';
    }
    return color;
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
