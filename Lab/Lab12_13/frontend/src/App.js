import Header from "./components/Header";
import CreateStudent from "./components/CreateStudent";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";
import { useState } from "react"; 
function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]); // Append new student to the student list
  };
  return (
    <>
      <Header/>
      <CreateStudent addStudent={addStudent} />
      <StudentList students={students} />
      <Footer/>
    </>
  );
}

export default App;
