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
      this.studentId = studentId; 
      this.answers = []; 
    }

    addAnswer(question) {
      this.answers.push(question);
    }
  }

class Quiz {
    constructor(questions, students) {
      this.questions = new Map(questions.map(q => [q.qid, q.answer]));
      this.students = students; 
    }

    scoreStudentBySid(sid) {
      // Find the student by studentId
      const student = this.students.find(s => s.studentId === sid);
      
      if (!student) return 0; // Return 0 if student is not found
  
      let score = 0;

      for (let answer of student.answers) {
        const correctAnswer = this.questions.get(answer.qid);
        if (correctAnswer === answer.answer) {
          score++;
        }
      }
      return score;
    }

    getAverageScore() {
      const totalScore = this.students.reduce((accum, student) => {
        return accum + this.scoreStudentBySid(student.studentId);
      }, 0);
  
      return totalScore / this.students.length;
    }
  }

  const student1 = new Student(10);
  student1.addAnswer(new Question(2, 'a')); 
  student1.addAnswer(new Question(3, 'b')); 
  student1.addAnswer(new Question(1, 'b')); 
  
  const student2 = new Student(11);
  student2.addAnswer(new Question(3, 'b')); 
  student2.addAnswer(new Question(2, 'a')); 
  student2.addAnswer(new Question(1, 'd')); 
  
  const students = [student1, student2];

  const questions = [
    new Question(1, 'b'),
    new Question(2, 'a'),
    new Question(3, 'b')
  ];
  
  // Create a Quiz instance
  const quiz = new Quiz(questions, students);
  
  // Get scores for each student
  let scoreForStudent10 = quiz.scoreStudentBySid(10);
  console.log(scoreForStudent10); 
  
  let scoreForStudent11 = quiz.scoreStudentBySid(11);
  console.log(scoreForStudent11); 
  
  // Get the average score across all students
  let averageScore = quiz.getAverageScore();
  console.log(averageScore); 
  