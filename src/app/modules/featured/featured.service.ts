import { Featured } from "@prisma/client";
import prisma from "../../../shared/prisma";

const getAllFromDB = async (): Promise<Featured[] | null > => {
  const result = await prisma.featured.findMany();
  return result;
};

const getDataById = async (id: string): Promise<Featured | null> => {
  const result = await prisma.featured.findUnique({ where: { id } });
  return result;
};

const insertIntoDB = async (data: Featured): Promise<Featured | null> => {
  const result = await prisma.featured.create({ data });
  return result;
};

const updateInDB = async (
  id: string,
  data: Partial<Featured >,
): Promise<Featured| null> => {
  const result = await prisma.featured.update({ where: { id }, data });
  return result;
};

const deleteFromDB = async (id: string):Promise<Featured | null> => {
  const result = await prisma.featured.delete({ where: { id } });
  return result;
}

export const FeaturedService = {
  getAllFromDB,
  getDataById,
  insertIntoDB,
  updateInDB,
  deleteFromDB,
}