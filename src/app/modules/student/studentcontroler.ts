import { Request, Response } from 'express';
import { studentservices } from './studentservice';

const createstudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;

    const result = await studentservices.createstudentInfoDB(student);

    res.status(200).json({
      success: true,
      message: 'Student is create successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const allstudent = async (req: Request, res: Response) => {
  try {
    const result = await studentservices.allStudentdataDb();
    res.status(200).json({
      success: true,
      message: 'Student are retrived',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getsingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentservices.singleStudentdataDb(studentId);

    res.json({
      success: true,
      message: 'student is retrived succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentControler = {
  createstudent,
  allstudent,
  getsingleStudent,
};
