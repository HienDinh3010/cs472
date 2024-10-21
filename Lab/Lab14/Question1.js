function describePerson(person) {
    var studentStatus = person.isStudent ? "is" : "is not";
    return "".concat(person.name, " is ").concat(person.age, " years old and ").concat(studentStatus, " a student.");
}
// Example usage
var examplePerson = {
    name: "Alice",
    age: 22,
    isStudent: true
};
console.log(describePerson(examplePerson));
// Output: Alice is 22 years old and is a student.
