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

  findModuleByCurrentId = () : any => {
    let result = {};
    this.modules.forEach(module => {
      if (module.id == this.id){
        result = module;
      }
    });
    return result;
  }
  findStudentsByCurrentModule = () =>{
    let result: any[] = [];
    let studentsModule = this.studentsModules.filter(studentModule => studentModule.module == this.findModuleByCurrentId().id);
    studentsModule.forEach( studentModule => {
      this.students.forEach( student => {
        if (studentModule.student == student.id){
          result.push(student);
        }
      })
    })
    return result
  }

  findColorByStudentAndByCurrentModule = (student:any) : string => {
    let studentsModule = this.studentsModules.filter(studentModule => studentModule.module == this.findModuleByCurrentId().id);
    let sign_status : any= ''
    studentsModule.forEach( studentModule => {
      if (studentModule.student == student.id){
        sign_status = studentModule.sign_status
      }
    });
    let color: string = '';
    if (sign_status == 'await'){
      color = 'text-gray-600';
    } else if (sign_status == 'missing'){
      color = 'text-pink-600';
    } else if (sign_status == 'valid'){
      color = 'text-green-600';
    }
    return color;
  }
}
