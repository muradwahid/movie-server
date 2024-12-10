import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import prisma from "../../../shared/prisma";
import { User } from "@prisma/client";
import config from "../../../config";
import { Secret } from "jsonwebtoken";
import { jwtHelpers } from "../../../helpers/jwtHelpers";

const loginUser = async (payload:Partial<User>) => {
  const { email, password }: Partial<User> = payload;
// creating instance of User
// const user = new User();
//  // access to our instance methods
//   const isUserExist = await user.isUserExist(id);

  // const isUserExist = await User.isUserExist(id);
  const isUserExist= await prisma.user.findFirst({
    where: {
      email,
    },
  });

if (!isUserExist) {
  throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
}

if (
  isUserExist.password &&
  isUserExist.password!==password
) {
  throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
}

//create access token & refresh token

const { userId, role,email:mail} = isUserExist;
const accessToken = jwtHelpers.createToken(
  { userId, role,email:mail },
  config.jwt.secret as Secret,
  config.jwt.expires_in as string,
);

const refreshToken = jwtHelpers.createToken(
  { userId, role,email:mail },
  config.jwt.refresh_secret as Secret,
  config.jwt.refresh_expires_in as string,
);

return {
  accessToken,
  refreshToken,
};
};

export const AuthService = {
  loginUser
}