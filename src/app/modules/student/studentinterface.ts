export type Guardian = {
  fathername: string;
  mothername: string;
  fatherOccupation: string;
  motherOccupation: string;
};

export type Username = {
  firstName: string;
  Middlename: string;
  lastName: string;
};

export type LocalGuardian = {
  name: string;
  contactNumber: string;
  occupation: string;
};

export type Student = {
  id: string;
  name: Username;
  gender: 'male' | 'female';
  birthDay?: string;
  email: string;
  ContactNumber: string;
  bloodGroup?: 'a+' | 'b' | 'a-';
  presentAdress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg?: string;
  isActive: 'active' | 'inactive';
};
