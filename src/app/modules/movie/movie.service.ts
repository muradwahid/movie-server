import { Movies } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { IMovieFilterAbleFields } from "./movie.interface";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { IGenericResponse } from "../../../interfaces/common";
import { MovieSearchAbleFields } from "./movie.constant";
import { paginationHelpers } from "../../../helpers/paginationHelper";


const getAllFromDB = async (filters: IMovieFilterAbleFields, options: IPaginationOptions): Promise<IGenericResponse<Movies[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = filters;
  const andConditions = new Array();
  if (searchTerm) {
    andConditions.push({
      OR: MovieSearchAbleFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }
  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map(key => ({
        [key]: {
          equals: (filterData as any)[key],
        },
      })),
    });
  }
  const whereConditions =
    andConditions.length > 0 ? { AND: andConditions } : {};
  const result = await prisma.movies.findMany({
    where: whereConditions,
    skip,
    take: limit,
    include: {
      categories: true,
      region: true,
      link: true
    },
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy as any]: options.sortOrder,
          }
        : {
            updatedAt: 'desc',
            // createdAt: 'desc',
          },
  });

  const total = await prisma.movies.count();
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
}
const getDataById = async (id: string): Promise<Movies | null> => {
  const result = await prisma.movies.findUnique({ where: { id } });
  return result;
};

const insertIntoDB = async (data: Movies): Promise<Movies | null> => {
  const result = await prisma.movies.create({ data });
  return result;
};

const updateIntoDB = async (id: string, data: Partial<Movies>): Promise<Movies | null> => { 
  const result = await prisma.movies.update({
    where: { id },
    data,
  });
  return result;
}

const deleteFromDB = async (id: string): Promise<Movies> => {
  const result =await prisma.movies.delete({ where: { id } });
  return result;
}

export const MovieService = {
  getAllFromDB,
  getDataById,
  insertIntoDB,
  updateIntoDB,
  deleteFromDB,
};