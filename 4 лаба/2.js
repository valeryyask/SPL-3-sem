// Создаем коллекцию Set для студентов
const students = new Set();

// Функция для добавления студента
function addStudent(id, group, name) {
    students.add({ id, group, name });
}

// Функция для удаления студента по номеру зачетки
function removeStudentById(id) {
    students.forEach(student => {
        if (student.id === id) {
            students.delete(student);
        }
    });
}

// Функция для фильтрации студентов по группе
function filterByGroup(group) {
    return Array.from(students).filter(student => student.group === group);
}

// Функция для сортировки студентов по номеру зачетки
function sortById() {
    return Array.from(students).sort((a, b) => a.id - b.id);
}

// Пример использования
addStudent(1, "CS101", "John Doe");
addStudent(2, "CS102", "Jane Smith");
addStudent(3, "CS101", "Alice Johnson");

console.log(filterByGroup("CS101")); // Студенты из группы CS101
removeStudentById(1);
console.log(sortById()); // Сортировка по номеру зачетки
