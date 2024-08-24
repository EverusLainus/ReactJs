declare class Person {
    name: string;
    age: number;
    constructor(name: string, age: number);
}
declare class Student extends Person {
    studentId: number;
    course: string;
    semester: number;
    constructor(name: string, age: number, studentId: number, course: string, semester: number);
}
declare class Staff extends Person {
    staffId: number;
    department: string;
    position: number;
    constructor(name: string, age: number, staffId: number, department: string, position: number);
}
declare let student1: Student;
declare let staff1: Staff;
