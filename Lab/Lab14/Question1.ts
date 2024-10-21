interface Person {
    name: string;
    age: number;
    isStudent: boolean;
  }
  
  function describePerson(person: Person): string {
    const studentStatus = person.isStudent ? "is" : "is not";
    return `${person.name} is ${person.age} years old and ${studentStatus} a student.`;
  }
  
  // Example usage
  const examplePerson: Person = {
    name: "Alice",
    age: 22,
    isStudent: true
  };
  
  console.log(describePerson(examplePerson));
  // Output: Alice is 22 years old and is a student.