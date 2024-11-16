import express from 'express';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { upload, uploadToCloudinary } from '../../middlewares/file.middleware.js';
import {isAuth} from '../../authentication/jwt.js';

import { addFacturas, getFacturas } from '../controllers/facturas.controller.js';

 const facturasRoutes = express.Router();

  facturasRoutes.get('/', getFacturas);
  facturasRoutes.post('/',[ upload.single('imagen'), uploadToCloudinary],addFacturas); 


export { facturasRoutes };