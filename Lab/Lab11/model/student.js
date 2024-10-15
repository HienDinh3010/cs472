const students = [
    { id: 116257, name: "Anna Smith", program: "MBA" },
    { id: 615789, name: "John Doe", program: "Compro" },
    { id: 116868, name: "Tom Jerryh", program: "MBA" },
    { id: 616463, name: "Hien Dinh", program: "Compro" },
];

export default class Student {
    constructor(id, name, program) {
        this.id = id;
        this.name = name;
        this.program = program;
    }
    static getAll() {
        return structuredClone(students); //students.map(e=>e)
    }
    static getStudentById(id) {
        return students.find(e => e.id === id);
    }

    create() {
        let student = students.find(e => e.id == this.id)
        if (!student) {
            students.push(this)
            return this;
        }
    }

    static deleteById(id) {
        const index = students.findIndex(e => e.id == id)
        if (index !== -1) {
            return students.splice(index, 1)[0];
        }
    }

    static updateById(id, name, program) {
        const student = students.find(e => e.id == id)
        if (student) {
            if (name) {
                student.name = name;
            }
            if (program) {
                student.program = program;
            }
            return student;
        }
    }

    static sortBy(field, order) {
        return Student.getAll().sort((e1, e2) =>
            (typeof e1[field] === 'number') ?
                order * (e1[field] - e2[field]) : order * e1[field].localeCompare(e2[field]))
    }

    static filterByProgram(program) {
        return Student.getAll().filter(e => e.program == program);
    }

    static sortAndFilterByProgram(field, order, program) {
        return Student.getAll().sort((e1, e2) =>
            (typeof e1[field] === 'number') ?
                order * (e1[field] - e2[field]) : order * e1[field].localeCompare(e2[field])).filter(e => e.program === program)
    }

}