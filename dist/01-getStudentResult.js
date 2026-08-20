"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getStudentResult = (student) => {
    const marks = student.marks;
    const totalMarks = marks.reduce((accu, mark) => accu + mark, 0);
    const average = totalMarks / marks.length;
    const result = average >= 40 ? "Passed" : "Failed";
    return { name: student.name, average: average, result: result };
};
console.log(getStudentResult({
    name: "Rafi",
    marks: [80, 75, 90, 85]
}));
//# sourceMappingURL=01-getStudentResult.js.map