class Question {
    constructor(qid, answer) {
      this.qid = qid; 
      this.answer = answer; 
    }

    checkAnswer(studentAnswer) {
      return this.answer === studentAnswer;
    }
  }

  class Student {
    constructor(studentId) {
      this.studentId = studentId; // unique student ID
      this.answers = []; // array to store student's answers to questions
    }
  
    // Method to add a question and student's answer to answers array
    addAnswer(question) {
      this.answers.push(question);
    }
  }
  
  // Quiz class
  class Quiz {
    constructor(questions, students) {
      // Convert questions array to a Map where the key is question ID and the value is the correct answer
      this.questions = new Map(questions.map(q => [q.qid, q.answer]));
      this.students = students; // array to hold all the students
    }
  
    // Method to calculate score for a student based on their studentId (sid)
    scoreStudentBySid(sid) {
      // Find the student by studentId
      const student = this.students.find(s => s.studentId === sid);
      
      if (!student) return 0; // Return 0 if student is not found
  
      let score = 0;
      // Iterate over the student's answers
      for (let answer of student.answers) {
        // Get the correct answer from the questions Map
        const correctAnswer = this.questions.get(answer.qid);
        // Check if the student's answer matches the correct answer
        if (correctAnswer === answer.answer) {
          score++; // Increment score if correct
        }
      }
      return score;
    }
  
    // Method to calculate the average score of all students
    getAverageScore() {
      // Calculate total scores of all students
      const totalScore = this.students.reduce((accum, student) => {
        return accum + this.scoreStudentBySid(student.studentId);
      }, 0);
  
      // Calculate the average score
      return totalScore / this.students.length;
    }
  }
  
  // Example usage
  
  // Create students
  const student1 = new Student(10);
  student1.addAnswer(new Question(2, 'a')); // Answering question with ID 2 as 'a'
  student1.addAnswer(new Question(3, 'b')); // Answering question with ID 3 as 'b'
  student1.addAnswer(new Question(1, 'b')); // Answering question with ID 1 as 'b'
  
  const student2 = new Student(11);
  student2.addAnswer(new Question(3, 'b')); // Answering question with ID 3 as 'b'
  student2.addAnswer(new Question(2, 'a')); // Answering question with ID 2 as 'a'
  student2.addAnswer(new Question(1, 'd')); // Answering question with ID 1 as 'd'
  
  // Create an array of students
  const students = [student1, student2];
  
  // Create an array of questions (with correct answers)
  const questions = [
    new Question(1, 'b'), // Question 1 has correct answer 'b'
    new Question(2, 'a'), // Question 2 has correct answer 'a'
    new Question(3, 'b')  // Question 3 has correct answer 'b'
  ];
  
  // Create a Quiz instance
  const quiz = new Quiz(questions, students);
  
  // Get scores for each student
  let scoreForStudent10 = quiz.scoreStudentBySid(10);
  console.log(scoreForStudent10); // Expected Result: 3
  
  let scoreForStudent11 = quiz.scoreStudentBySid(11);
  console.log(scoreForStudent11); // Expected Result: 2
  
  // Get the average score across all students
  let averageScore = quiz.getAverageScore();
  console.log(averageScore); // Expected Result: 2.5
  