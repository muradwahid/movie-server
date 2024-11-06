import { Link } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getAllFromDB = async (): Promise<Link[] | null | undefined> => {
  const result = await prisma.link.findMany();
  return result;
};
const getDataById = async (id: string): Promise<Link | null | undefined> => {
  const result = await prisma.link.findUnique({ where: { id } });
  return result;
};

const insertIntoDB = async (data: Link): Promise<Link | null | undefined> => {
  const result = await prisma.link.create({ data });
  return result;
};

const updateInDB = async (id: string, data: Partial<Link>): Promise<Link | null | undefined> => {
  const result = await prisma.link.update({
    where: { id },
    data,
  });
  return result;
}

const deleteFromDB = async (id: string): Promise<Link | null | undefined> => {
  const result = await prisma.link.delete({ where: { id } });
  return result;
};

export const LinkService = {
  getAllFromDB,
  getDataById,
  insertIntoDB,
  updateInDB,
  deleteFromDB
};
