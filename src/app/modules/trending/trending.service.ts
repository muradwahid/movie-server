import { Trending } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getAllFromDB = async (): Promise<Trending[] | null> => {
  const result = await prisma.trending.findMany();
  return result;
};

const getDataById = async (id: string): Promise<Trending | null> => { 
  const result = await prisma.trending.findUnique({ where: { id } });
  return result;
}

const insertIntoDB = async (data: Trending): Promise<Trending | null> => {
  const result = await prisma.trending.create({ data });
  return result;
};

const updateInDB = async (id: string, data: Partial<Trending>): Promise<Trending | null> => {
  const result = await prisma.trending.update({ where: { id }, data });
  return result;
};

const deleteFromDB = async (id: string): Promise<Trending | null> => {
  const result = await prisma.trending.delete({ where: { id } });
  return result;
};

export const TrendingService = {
  getAllFromDB,
  getDataById,
  insertIntoDB,
  updateInDB,
  deleteFromDB,
};
