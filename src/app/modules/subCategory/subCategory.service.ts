import { SubCategory } from "@prisma/client";
import prisma from "../../../shared/prisma";

const getAllFromDB = async (): Promise<SubCategory[] | null | undefined> => { 
  const result = await prisma.subCategory.findMany();
  return result;
}
const getDataById = async (id: string): Promise<SubCategory | null | undefined> => { 
  const result = await prisma.subCategory.findUnique({ where: { id } });
  return result;
}
const insertIntoDB = async (data: SubCategory): Promise<SubCategory | null | undefined> => { 
  const result = await prisma.subCategory.create({ data });
  return result;
}
const updateInDB = async (id: string, data: Partial<SubCategory>): Promise<SubCategory | null | undefined> => { 
  const result = await prisma.subCategory.update({ where: { id }, data });
  return result;
}

const deleteFromDB = async (id: string): Promise<SubCategory | null> => { 
  const result =await prisma.subCategory.delete({ where: { id } });
  return result;
}

export const SubCategoryService = {
  getAllFromDB,
  getDataById,
  insertIntoDB,
  updateInDB,
  deleteFromDB
};
