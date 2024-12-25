const students = [
    { name: "Alice", age: 18, groupId: 1 },
    { name: "Bob", age: 16, groupId: 2 },
    { name: "Charlie", age: 19, groupId: 1 },
    { name: "David", age: 20, groupId: 2 }
];

function groupByGroupId(arr) {
    return arr.reduce((acc, student) => {
        if (student.age > 17) {
            if (!acc[student.groupId]) {
                acc[student.groupId] = [];
            }
            acc[student.groupId].push(student);
        }
        return acc;
    }, {});
}

console.log(groupByGroupId(students));
// { '1': [ { name: 'Alice', age: 18, groupId: 1 }, { name: 'Charlie', age: 19, groupId: 1 } ], '2': [ { name: 'David', age: 20, groupId: 2 } ] }
