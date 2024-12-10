import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { UserService } from "./user.service";
import httpStatus from "http-status";

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getAllFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Users retrieved successfully!",
    data: result
  })
})
const getDataById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await UserService.getDataById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User retrieved successfully!",
    data: result
  })
})

const insertIntoDB = catchAsync(async (req: Request, res: Response) => { 
  const data = req.body;
  const result = await UserService.insertIntoDB(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User register successfully!",
    data: result
  })
})

const updateInDB = catchAsync(async (req: Request, res: Response) => { 
  const id = req.params.id;
  const data = req.body;
  const result = await UserService.updateInDB(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User updated successfully!",
    data: result
  })
})

const deleteFromDB = catchAsync(async (req: Request, res: Response) => { 
  const id = req.params.id;
  const result = await UserService.deleteFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User deleted successfully!",
    data: result,
  })
})

export const UserController = {
  getAllFromDB,
  getDataById,
  insertIntoDB,
  updateInDB,
  deleteFromDB,
}