import jwt from "jsonwebtoken";
import { createError } from "./createError.js";
import User from "../models/user.js";
import bcrypt from 'bcryptjs';


export const verifyUser = (req, res, next) => {
    // // console.log("from verifyUser : ", req.user);
    // verifyToken(req, res, () => {
    //     // console.log("req from verifyUesr :::: ",req.user);
    //     // console.log('verifyUesr')
    //     if (req.user.id === req.params.id || req.user.isAdmin) {
    //         next();
    //     } else {
    //         return next(createError(403, "Unauthorized"));
    //     }
    // });
};