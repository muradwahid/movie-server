import { Category } from "@prisma/client"
import prisma from "../../../shared/prisma"

const getAllFromDB = async (): Promise<Category[] | null | undefined> => {
  const result = await prisma.category.findMany({
    include: {
    sub_categories:true,
  }});
  return result;
}
const getDataById = async (id: string): Promise<Category | null> => { 
  const result = await prisma.category.findUnique({ where: { id } });
  return result;
}

const insertIntoDB = async (data:Category):Promise<Category | null> => { 
  const result = await prisma.category.create({ data })
  return result;
}
const updateDataById = async (id: string, data: Partial<Category>): Promise<Category | null> => { 
  const result = await prisma.category.update({ where: { id }, data });
  return result;
}

const deleteDataById = async (id: string): Promise<Category | null> => { 
  const result = await prisma.category.delete({ where: { id } });
  return result;
}

export const CategoryService = {
  getAllFromDB,
  getDataById,
  insertIntoDB,
  updateDataById,
  deleteDataById,
}