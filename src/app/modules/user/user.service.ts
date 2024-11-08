import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getAllFromDB = async ():Promise<User[] | null> => {
  const result = await prisma.user.findMany();
  return result;
};

const getDataById = async (id:number):Promise<User | null> => {
  const result = await prisma.user.findUnique({ where: { userId:id } });
  return result;
};

const insertIntoDB = async (data: User):Promise<User | null> => {
  const result = await prisma.user.create({ data });
  return result;
};

const updateInDB = async (id: string, data: Partial<User>): Promise<User | null> => {
  const result = await prisma.user.update({ where: { id }, data });
  return result;
};

const deleteFromDB = async (id: string): Promise<User | null> => {
  const result = await prisma.user.delete({ where: { id } });
  return result;
};

export const UserService = {
  getAllFromDB,
  getDataById,
  insertIntoDB,
  updateInDB,
  deleteFromDB,
};
