import express from 'express';
import { addfieldtostudent,  createMentor , getallMentors, getassignedmentors, getassignedstudents }  from '../Controllers/mentor.controller.js';

const router = express.Router();

router.post('/create/mentor', createMentor)
router.get('/all/mentors', getallMentors)
router.get('/:id', getassignedstudents)
router.patch('/:id/assignmentor', addfieldtostudent)
router.get('/mentor/:id' , getassignedmentors)




export default router;