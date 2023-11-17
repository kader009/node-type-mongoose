import { studentModel } from '../studentmodel';
import { Student } from './studentinterface';

const createstudentInfoDB = async (student: Student) => {
  const result = await studentModel.create(student);
  return result;
};

const allStudentdataDb = async () => {
  const result = await studentModel.find();
  return result;
};

const singleStudentdataDb = async (id: string) => {
  const result = await studentModel.findOne({ id: id });
  return result;
};

export const studentservices = {
  createstudentInfoDB,
  allStudentdataDb,
  singleStudentdataDb,
};
