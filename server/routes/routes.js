import express from 'express';
import { uploadImage } from '../controllers/image-controller.js';
import upload from '../utils/upload.js';
import { downloadImage } from '../controllers/image-controller.js';
const router = express.Router();

router.post('/upload',upload.single('file'),uploadImage);
router.get('/file/:fileId',downloadImage);
export default router;