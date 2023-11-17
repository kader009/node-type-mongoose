import express from 'express';
import { StudentControler } from './studentcontroler';

const router = express.Router();

// will call controller
router.post('/create-student', StudentControler.createstudent);

router.get('/', StudentControler.allstudent);

router.get('/:studentId', StudentControler.getsingleStudent);

export const studentroute = router;
