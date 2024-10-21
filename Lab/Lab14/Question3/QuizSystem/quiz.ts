interface IQuestion {
    qid: number;
    answer: string;
    checkAnswer(studentAnswer: string): boolean;
  }
  
  interface IStudent {
    studentId: number;
    answers: IQuestion[];
    addAnswer(question: IQuestion): void;
  }
  
  interface IQuiz {
    questions: Map<number, string>;
    students: IStudent[];
    scoreStudentBySid(sid: number): number;
    getAverageScore(): number;
  }
  
  class QuestionQuiz implements IQuestion {
    constructor(public qid: number, public answer: string) {}
  
    checkAnswer(studentAnswer: string): boolean {
      return this.answer === studentAnswer;
    }
  }
  
  class Student implements IStudent {
    answers: IQuestion[] = [];
  
    constructor(public studentId: number) {}
  
    addAnswer(question: IQuestion): void {
      this.answers.push(question);
    }
  }
  
  class Quiz implements IQuiz {
    questions: Map<number, string>;
  
    constructor(questions: IQuestion[], public students: IStudent[]) {
      this.questions = new Map(questions.map(q => [q.qid, q.answer]));
    }
  
    scoreStudentBySid(sid: number): number {
      const student = this.students.find(s => s.studentId === sid);
      
      if (!student) return 0;
  
      return student.answers.reduce((score, answer) => {
        const correctAnswer = this.questions.get(answer.qid);
        return score + (correctAnswer === answer.answer ? 1 : 0);
      }, 0);
    }
  
    getAverageScore(): number {
      const totalScore = this.students.reduce((accum, student) => {
        return accum + this.scoreStudentBySid(student.studentId);
      }, 0);
  
      return totalScore / this.students.length;
    }
  }
  
  // Usage
  const student1 = new Student(10);
  student1.addAnswer(new Question(2, 'a'));
  student1.addAnswer(new Question(3, 'b'));
  student1.addAnswer(new Question(1, 'b'));
  
  const student2 = new Student(11);
  student2.addAnswer(new Question(3, 'b'));
  student2.addAnswer(new Question(2, 'a'));
  student2.addAnswer(new Question(1, 'd'));
  
  const students: IStudent[] = [student1, student2];
  
  const questions: IQuestion[] = [
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