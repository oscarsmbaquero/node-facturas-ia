import express from 'express';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { upload, uploadToCloudinary } from '../../middlewares/file.middleware.js';
import {isAuth} from '../../authentication/jwt.js';

import {  createCars} from '../controllers/cars.controller.js';

 const carRoutes = express.Router();

  // carRoutes.get('/', getCars);
  // carRoutes.get('/:id', carDetail);
  carRoutes.post('/',[ upload.single('imagen'), uploadToCloudinary],createCars); 
  // carRoutes.put('/:id', updateCars);
  // carRoutes.delete('/delete/:id', deleteCar);


export { carRoutes };