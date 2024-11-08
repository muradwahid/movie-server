import {Request,Response} from "express"
import { Trending } from "@prisma/client"
import catchAsync from "../../../shared/catchAsync"
import sendResponse from "../../../shared/sendResponse"
import { TrendingService } from "./trending.service"
import httpStatus from "http-status"

const getAllFromDB = catchAsync(async (req:Request,res:Response) => {
  const result = await TrendingService.getAllFromDB()
  sendResponse<Trending[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Trending retrieved successfully!",
    data: result,
  })
})

const getDataById = catchAsync(async (req: Request, res: Response) => { 
  const id = req.params.id
  const result = await TrendingService.getDataById(id)
  sendResponse<Trending>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Trending retrieved successfully!",
    data: result,
  })
})

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const data = req.body
  const result = await TrendingService.insertIntoDB(data)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Trending uploaded successfully!",
    data: result
  })
})

const updateInDB = catchAsync(async (req: Request, res: Response) => { 
  const id = req.params.id
  const data = req.body
  const result = await TrendingService.updateInDB(id, data)
  sendResponse<Trending>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Trending updated successfully!",
    data: result,
  })
})

const deleteFromDB = catchAsync(async (req: Request, res: Response) => { 
  const id = req.params.id
  const result = await TrendingService.deleteFromDB(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Trending deleted successfully!",
    data: result,
  })
 
})

export const TrendingController = {
  getAllFromDB,
  getDataById,
  insertIntoDB,
  updateInDB,
  deleteFromDB,
}