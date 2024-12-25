// Студент как объект
class Student {
    constructor(id, group, name) {
        this.id = id;
        this.group = group;
        this.name = name;
    }
}

// Set для хранения студентов
let students = new Set();

// Функция добавления студента
function addStudent(student) {
    students.add(student);
}

// Функция удаления студента по номеру зачетки
function removeStudentById(id) {
    students.forEach(student => {
        if (student.id === id) {
            students.delete(student);
        }
    });
}

// Функция фильтрации студентов по группе
function filterByGroup(group) {
    return Array.from(students).filter(student => student.group === group);
}

// Функция сортировки по номеру зачетки
function sortById() {
    return Array.from(students).sort((a, b) => a.id - b.id);
}

let student1 = new Student(1, "Группа1", "Иванов Иван");
let student2 = new Student(2, "Группа1", "Петров Петр");
let student3 = new Student(3, "Группа2", "Сидоров Сергей");

addStudent(student1);
addStudent(student2);
addStudent(student3);

console.log(filterByGroup("Группа1")); // Список студентов в Группа1
console.log(sortById()); // Сортировка студентов по номеру зачетки
removeStudentById(1); // Удалить студента с id 1
