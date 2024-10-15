import exp from "constants"
import studentController from "../controller/studentController.js";
import express from "express"

const router = express.Router();

router.route('/')
    .get(studentController.getStudents, studentController.getStudentsByQuerystring)
    .post(express.json(), studentController.createStudent);


router.route('/:id')
    .delete(express.json(), studentController.deleteStudentById)
    .put(express.json(), studentController.updateStudentById)
    .get(studentController.getStudentById);


export default router;