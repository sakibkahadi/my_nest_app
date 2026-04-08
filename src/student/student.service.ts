import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    { id: 1, name: 'Sakib', age: 26 },
    { id: 2, name: 'Rafsan', age: 23 },
  ];

  getAllStudents() {
    return this.students;
  }

  getStudentsById(id: number) {
    const student = this.students.find((s) => s.id === id);
    if (!student) {
      // not found
      throw new NotFoundException('Student not found');
    }
    return student;
  }

  // post
  createStudent(data: { name: string; age: number }) {
    const newStudent = {
      id: Date.now(),
      ...data,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  //   put (complete data update korte )
  updateStudent(id: number, data: { name: string; age: number }) {
    // index value arr index start from 0,1.....
    const index = this.students.findIndex((s) => s.id === id);
    // element find na hole index value -1 return kore
    if (index === -1) {
      throw new NotFoundException('Student not found!');
    }
    // index dore update krbo
    this.students[index] = { id, ...data };
    return this.students[index];
  }
  // patch (name or age or partially updatekorbo)
  patchStudent(id: number, data: Partial<{ name: string; age: number }>) {
    // index or evhae kora jabe
    const student = this.getStudentsById(id);
    // object.assign same rakhbe just specific part e update korbe. copy baniye dei just datar bhitore jeta update oit updte korbe
    Object.assign(student, data);
    return student;
  }
  deleteStudent(id: number) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) {
      throw new NotFoundException('Student not found!');
    }
    // arr theka randomly index dhore remove korbe(index, koyta element remvoe krbe) splice array return kore tai 0 index pathabo
    const deleted = this.students.splice(index, 1);
    return { message: 'Student Deleted Successfully', student: deleted[0] };
  }
}
