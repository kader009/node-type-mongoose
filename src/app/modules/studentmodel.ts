import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  Username,
} from './student/studentinterface';

const userNameSchema = new Schema<Username>({
  firstName: {
    type: String,
    required: true,
  },
  Middlename: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const guardianSchema = new Schema<Guardian>({
  fathername: { type: String, required: true },
  mothername: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  motherOccupation: { type: String, required: true },
});

const LocalGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  contactNumber: { type: String, required: true },
  occupation: { type: String, required: true },
});

const StudentSchema = new Schema<Student>({
  id: { type: String, required: true },
  name: userNameSchema,
  gender: ['male', 'female'],
  birthDay: { type: String },
  email: { type: String, required: true },
  ContactNumber: { type: String, required: true },
  bloodGroup: ['a+', 'b', 'a-'],
  presentAdress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: LocalGuardianSchema,
  profileImg: { type: String, required: true },
  isActive: ['active', 'blocked'],
});

export const studentModel = model<Student>('Student', StudentSchema);
