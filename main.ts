// Define the 'school' class
class school {
    name: string;
    students: student[] = []; // Array to store students
    teachers: teacher[] = []; // Array to store teachers

    // Method to add a student to the 'students' array
    addStudent(stdObj: student) {
        this.students.push(stdObj);
    }

    // Method to add a teacher to the 'teachers' array
    addTeacher(teObj: teacher) {
        this.teachers.push(teObj);
    }

    // Constructor to initialize the 'name' property
    constructor(name: string) {
        this.name = name;
    }
};

// Define the 'student' class
class student {
    name: string;
    age: number;
    schoolName: string;

    // Constructor to initialize the 'name', 'age', and 'schoolName' properties
    constructor(name: string, age: number, schoolName: string) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
};

// Define the 'teacher' class, which extends the 'student' class
class teacher extends student {}

// Create instances of schools
let school1 = new school("Guardianhouse public school");
let school2 = new school("Al usman public school");
let school3 = new school("Bright future public school");

// Create instances of students
let student1 = new student("Noreen Aslam", 16, school1.name);
let student2 = new student("Fatima Rehmat Ali", 17, school2.name);
let student3 = new student("Hifza Zafar", 18, school3.name);

// Create instances of teachers
let teacher1 = new teacher("Haleema", 23, school1.name);
let teacher2 = new teacher("Ayesha", 24, school2.name);
let teacher3 = new teacher("Hareem", 25, school3.name);

// Add students to schools
school1.addStudent(student1);
school2.addStudent(student2);
school3.addStudent(student3);

// Add teachers to schools
school1.addTeacher(teacher1);
school2.addTeacher(teacher2);
school3.addTeacher(teacher3);

// Output student and teacher objects to the console
console.log(student1);
console.log(student2);
console.log(student3);

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
