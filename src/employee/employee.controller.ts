import { Controller, Get, Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  // for using services in controller we need constructor. using constructor we use dependency injection 
  constructor(private readonly employeeService: EmployeeService) {}
  @Get()
  getEmployee() {
    return this.employeeService.getAllEmployee();
  }
  @Get(':id')
  getSingleEmployee(@Param('id') id: string) {
    return this.employeeService.getEmployeeById(Number(id));
  }
  @Get('profession/:profession')
  getSingleEmployeeByProfession(@Param('profession') profession:string){
    return this.employeeService.getEmployeeByProfession(profession)
  }
}
