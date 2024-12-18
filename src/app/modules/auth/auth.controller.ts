import { Request,Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import config from "../../../config";
import { AuthService } from "./auth.service";

const loginUser = catchAsync(async (req: Request, res: Response) => { 
    const { ...loginData } = req.body;
    const result = await AuthService.loginUser(loginData);
    const { refreshToken } = result;
    // set refresh token into cookie
    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true,
    };

    res.cookie('refreshToken', refreshToken, cookieOptions);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User logged in successfully !',
      data: result,
    });
})

export const AuthController = {
  loginUser,
};