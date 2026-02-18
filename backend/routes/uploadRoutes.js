import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import { upload, deleteImage } from '../config/cloudinary.js';

const router = express.Router();

// Check if Cloudinary is configured
if (!upload) {
  router.post('/', protect, admin, (req, res) => {
    return res.status(500).json({ 
      message: 'Cloudinary is not configured. Please set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET in your .env file.' 
    });
  });
  
  router.post('/multiple', protect, admin, (req, res) => {
    return res.status(500).json({ 
      message: 'Cloudinary is not configured. Please set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET in your .env file.' 
    });
  });
} else {
  // @route   POST /api/upload
  // @desc    Upload single image to Cloudinary
  // @access  Private/Admin
  router.post('/', protect, admin, (req, res, next) => {
    console.log('Upload request received:', {
      hasFile: !!req.file,
      contentType: req.headers['content-type'],
      contentLength: req.headers['content-length'],
    });
    
    upload.single('image')(req, res, (err) => {
      if (err) {
        console.error('Upload error details:', {
          message: err.message,
          code: err.code,
          field: err.field,
          stack: err.stack,
        });
        
        if (err.message === 'Only image files are allowed!') {
          return res.status(400).json({ message: 'Only image files are allowed (jpg, jpeg, png, gif, webp)' });
        }
        if (err.code === 'LIMIT_FILE_SIZE') {
          return res.status(400).json({ message: 'File too large. Maximum size is 5MB.' });
        }
        return res.status(400).json({ message: err.message || 'Upload failed', error: err.code || 'UNKNOWN' });
      }
      
      if (!req.file) {
        console.error('No file in request after multer processing');
        return res.status(400).json({ message: 'No file uploaded. Please select an image file.' });
      }

      try {
        console.log('File uploaded successfully:', {
          filename: req.file.filename,
          path: req.file.path,
          size: req.file.size,
          mimetype: req.file.mimetype,
        });
        
        const response = {
          message: 'File uploaded successfully',
          filename: req.file.filename,
          path: req.file.path, // Cloudinary URL
          url: req.file.path, // Cloudinary URL (same as path)
          public_id: req.file.filename, // Cloudinary public_id
          secure_url: req.file.path, // Cloudinary secure URL
        };
        
        console.log('Sending response:', response);
        res.json(response);
      } catch (error) {
        console.error('Error processing upload:', error);
        res.status(500).json({ message: 'Error processing upload', error: error.message });
      }
    });
  });

  // @route   POST /api/upload/multiple
  // @desc    Upload multiple images to Cloudinary
  // @access  Private/Admin
  router.post('/multiple', protect, admin, (req, res, next) => {
    upload.array('images', 10)(req, res, (err) => {
      if (err) {
        console.error('Upload error:', err);
        if (err.message === 'Only image files are allowed!') {
          return res.status(400).json({ message: 'Only image files are allowed (jpg, jpeg, png, gif, webp)' });
        }
        if (err.code === 'LIMIT_FILE_SIZE') {
          return res.status(400).json({ message: 'File too large. Maximum size is 5MB.' });
        }
        return res.status(400).json({ message: err.message || 'Upload failed' });
      }
      
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: 'No files uploaded' });
      }

      const files = req.files.map((file) => ({
        filename: file.filename,
        path: file.path, // Cloudinary URL
        url: file.path, // Cloudinary URL
        public_id: file.filename, // Cloudinary public_id
        secure_url: file.path, // Cloudinary secure URL
      }));

      res.json({
        message: 'Files uploaded successfully',
        files,
      });
    });
  });
}

// @route   DELETE /api/upload/:publicId
// @desc    Delete image from Cloudinary
// @access  Private/Admin
router.delete('/:publicId', protect, admin, async (req, res) => {
  try {
    const { publicId } = req.params;
    const result = await deleteImage(publicId);
    
    if (result.result === 'ok') {
      res.json({ message: 'Image deleted successfully', result });
    } else {
      res.status(404).json({ message: 'Image not found', result });
    }
  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).json({ message: 'Error deleting image', error: error.message });
  }
});

export default router;
