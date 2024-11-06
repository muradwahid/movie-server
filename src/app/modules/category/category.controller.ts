import {Request,Response} from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { Category } from "@prisma/client";
import httpStatus from "http-status";
import { CategoryService } from "./category.service";

const getAllFromDB = catchAsync(async (req: Request, res: Response) => { 
  const result = await CategoryService.getAllFromDB();
  sendResponse<Category[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Categories fetched successfully!",
    data: result
  })
})
const getDataById = catchAsync(async (req: Request, res: Response) => { 
  const result = await CategoryService.getDataById(req.params.id);
  sendResponse<Category>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category fetched successfully!",
    data: result
  })
})
const insertIntoDB = catchAsync(async(req: Request, res: Response) => { 
  const result = await CategoryService.insertIntoDB(req.body);
  sendResponse<Category>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category created successfully!",
    data: result
  })
})
const updateDataById = catchAsync(async (req: Request, res: Response) => {
  const {id} = req.params;
  const result = await CategoryService.updateDataById(id, req.body);
  sendResponse<Category>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category updated successfully!",
    data: result
  })
})

const deleteDataById = catchAsync(async (req: Request, res: Response) => {
  const {id} = req.params;
  const result = await CategoryService.deleteDataById(id);
  sendResponse<Category>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category deleted successfully!",
    data: result
  })
})

export const CategoryController = {
  getAllFromDB,
  getDataById,
  insertIntoDB,
  updateDataById,
  deleteDataById,
}