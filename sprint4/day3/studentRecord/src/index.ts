class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  studentId: number;
  course: string;
  semester: number;
  constructor(
    name: string,
    age: number,
    studentId: number,
    course: string,
    semester: number
  ) {
    super(name, age);
    this.studentId = studentId;
    this.course = course;
    this.semester = semester;
  }
}

class Staff extends Person {
  staffId: number;
  department: string;
  position: number;
  constructor(
    name: string,
    age: number,
    staffId: number,
    department: string,
    position: number
  ) {
    super(name, age);
    this.staffId = staffId;
    this.department = department;
    this.position = position;
  }
}

let student1 = new Student("Alan", 27, 234, "Algebra", 2);
console.log(student1);
let staff1 = new Staff("Alan", 27, 232, "Algebra", 2);
console.log(staff1);
