import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  students= [
    {id: 1, name: 'Romesh Shil',roll:100021},
    {id: 2, name: 'Amirul Islam',roll:100022},
    {id: 3, name: 'Nayon Hossain',roll:100023},
  ];

  constructor() { }
  
  getAllStudent()
  {
    return this.students;
  }

}
