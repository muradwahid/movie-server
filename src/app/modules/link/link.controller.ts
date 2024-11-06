import {Request,Response} from "express"
import catchAsync from "../../../shared/catchAsync"
import { LinkService } from "./link.service"
import sendResponse from "../../../shared/sendResponse";

const getAllFromDB = catchAsync(async (req: Request, res: Response) => { 
  const result = await LinkService.getAllFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Links retrieved successfully!",
    data: result
  })
})
const getDataById = catchAsync(async (req: Request, res: Response) => { 
  const id = req.params.id;
  const result = await LinkService.getDataById(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Link retrieved successfully!",
    data: result
  })
})

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await LinkService.insertIntoDB(data);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Link uploaded successfully!",
    data: result
  })
})
const updateInDB = catchAsync(async (req: Request, res: Response) => { 
  const id = req.params.id;
  const data = req.body;
  const result = await LinkService.updateInDB(id, data);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Link updated successfully!",
    data: result
  })
})
const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await LinkService.deleteFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Link deleted successfully!",
    data: result
  })
})

export const LinkController = {
  getAllFromDB,
  getDataById,
  insertIntoDB,
  updateInDB,
  deleteFromDB,
}