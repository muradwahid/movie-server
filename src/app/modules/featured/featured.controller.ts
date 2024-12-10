import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { FeaturedService } from './featured.service';

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await FeaturedService.getAllFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Featured items retrieved successfully!',
    data: result,
  });
});

const getDataById = catchAsync(async (req: Request, res: Response) => { 
  const id = req.params.id;
  const result = await FeaturedService.getDataById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Featured item retrieved successfully!',
    data: result,
  });
})

const insertIntoDB = catchAsync(async (req: Request, res: Response) => { 
  const data = req.body;
  const result = await FeaturedService.insertIntoDB(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Featured item uploaded successfully!',
    data: result,
  });
})

const updateInDB = catchAsync(async (req: Request, res: Response) => { 
  const id = req.params.id;
  const data = req.body;
  const result = await FeaturedService.updateInDB(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Featured item updated successfully!',
    data: result,
  });
})

const deleteFromDB = catchAsync(async (req: Request, res: Response) => { 
  const id = req.params.id;
  const result = await FeaturedService.deleteFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Featured item deleted successfully!',
    data: result,
  });
})

export const FeaturedController = {
  getAllFromDB,
  getDataById,
  insertIntoDB,
  updateInDB,
  deleteFromDB,
};
