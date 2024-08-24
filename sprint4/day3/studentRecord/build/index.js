class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    constructor(name, age, studentId, course, semester) {
        super(name, age);
        this.studentId = studentId;
        this.course = course;
        this.semester = semester;
    }
}
class Staff extends Person {
    constructor(name, age, staffId, department, position) {
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
//# sourceMappingURL=index.js.map