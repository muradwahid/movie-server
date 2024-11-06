import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { MovieService } from "./movie.service";
import { Movies } from "@prisma/client";
import pick from "../../../shared/pick";
import { paginationFields } from "../../../constants/pagination";
import { MovieFilterAbleFields } from "./movie.constant";



const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
    const options = pick(req.query, paginationFields);
    const filters = pick(req.query, MovieFilterAbleFields);
    const result = await MovieService.getAllFromDB(
      filters,
      options,
    );
    sendResponse<Movies[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Movies retrieved successfully!',
      meta: result.meta,
      data: result.data,
    });
})
const getDataById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await MovieService.getDataById(id);
  sendResponse<Movies>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Movie retrieved successfully!',
    data: result,
  });
});
const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await MovieService.insertIntoDB(data);
  sendResponse<Movies>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Movie uploaded successfully!',
    data: result,
  });
});
const updateIntoDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const data = req.body;
  const result = await MovieService.updateIntoDB(id, data);
  sendResponse<Movies>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Movie updated successfully!',
    data: result,
  });
})

const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await MovieService.deleteFromDB(id);
  sendResponse<Movies>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Movie deleted successfully!',
    data: result,
  });
})


export const MovieController = {
  getAllFromDB,
  getDataById,
  insertIntoDB,
  updateIntoDB,
  deleteFromDB,
};