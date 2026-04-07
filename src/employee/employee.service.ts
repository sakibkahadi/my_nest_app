import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
  private employeeArr = [
    {
      id: 1,
      name: 'sakib', profession:"SQA"
    },
    {
      id: 2,
      name: 'sujon', profession:"SQA"
    },
    {
      id: 3,
      name: 'rafsan', profession:"SE"
    },
    {
      id: 4,
      name: 'shohan', profession:"DevOps"
    },
  ];
  getAllEmployee(){
    return this.employeeArr;
  }
  getEmployeeById(id:number){
    return this.employeeArr.find((employee)=>employee.id === id)
  }
  getEmployeeByProfession(profession:string){
    return this.employeeArr.filter((employee)=>employee.profession === profession)
  }
}
