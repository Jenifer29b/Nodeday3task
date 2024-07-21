import express from 'express';
import { createStudent, getallstudents } from '../Controllers/student.controller.js';


const router = express.Router();

router.post('/create/student', createStudent);
router.get('/allstud' , getallstudents )





export default router;