import { Region } from "@prisma/client";
import prisma from "../../../shared/prisma";

const getAllFromDB = async ():Promise<Region[] | null | undefined> => { 
  const result = await prisma.region.findMany();
  return result;
}
const getDataById = async (id:string):Promise<Region | null> => { 
  const result = await prisma.region.findUnique({ where: { id } });
  return result;
}

const insertIntoDB = async (data: Region): Promise<Region | null> => {
  const result = await prisma.region.create({ data });
  return result;
};
const updateInDB = async (id: string, data: Region): Promise<Region | null> => {
  const result = await prisma.region.update({ where: { id }, data });
  return result;
};

const deleteFromDB = async (id: string): Promise<Region | null> => {
  const result = await prisma.region.delete({ where: { id } });
  return result;
};

export const RegionService = {
  getAllFromDB,
  getDataById,
  insertIntoDB,
  updateInDB,
  deleteFromDB
}