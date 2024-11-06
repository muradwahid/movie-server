import {Request,Response} from "express";
import catchAsync from "../../../shared/catchAsync";
import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";
import { SubCategoryService } from "./subCategory.service";

const getAllFromDB = catchAsync(async(req: Request, res: Response) => {
  const result = await SubCategoryService.getAllFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Subcategories fetched successfully!",
    data: result,
  })
})
const getDataById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SubCategoryService.getDataById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Subcategory fetched successfully!",
    data: result,
  });
})

const insertIntoDB = catchAsync(async (req: Request, res: Response) => { 
  const data = req.body;
  const result = await SubCategoryService.insertIntoDB(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Subcategory created successfully!",
    data: result,
  })
})

const updateInDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  const result = await SubCategoryService.updateInDB(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Subcategory updated successfully!',
    data: result,
  });
});

const deleteFromDB = catchAsync(async (req: Request, res: Response) => { 
  const { id } = req.params;
  const result = await SubCategoryService.deleteFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Subcategory deleted successfully!',
    data: result,
  });
})

export const SubCategoryController = {
  getAllFromDB,
  getDataById,
  insertIntoDB,
  updateInDB,
  deleteFromDB,
}