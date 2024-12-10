import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { RegionService } from "./region.service";
import sendResponse from "../../../shared/sendResponse";
import { Region } from "@prisma/client";
import httpStatus from "http-status";

const getAllFromDB = catchAsync(async (req: Request, res: Response) => { 
  const result = await RegionService.getAllFromDB();
  sendResponse<Region[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Regions retrieved successfully!",
    data: result,
  })
})

const getDataById = catchAsync(async (req: Request, res: Response) => { 
  const id = req.params.id;
  const result = await RegionService.getDataById(id);
  sendResponse<Region>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Region retrieved successfully!",
    data: result,
  })
})

const insertIntoDB = catchAsync(async (req: Request, res: Response) => { 
  const data = req.body;
  const result = await RegionService.insertIntoDB(data);
  sendResponse<Region>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Region created successfully!",
    data: result,
  })
})

const updateInDB = catchAsync(async (req: Request, res: Response) => { 
  const id = req.params.id;
  const data = req.body;
  const result = await RegionService.updateInDB(id, data);
  sendResponse<Region>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Region updated successfully!",
    data: result,
  })
})

const deleteFromDB = catchAsync(async (req: Request, res: Response) => { 
  const id = req.params.id;
  const result = await RegionService.deleteFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Region deleted successfully!",
    data: result,
  })
})

export const RegionController = {
  getAllFromDB,
  getDataById,
  insertIntoDB,
  updateInDB,
  deleteFromDB,
}