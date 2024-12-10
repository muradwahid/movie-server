import express from 'express';
import { AuthController } from './auth.controller';
const route = express.Router();

route.post("/login",AuthController.loginUser);


export const AuthRoutes = route;