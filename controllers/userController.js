import asyncHandler from '../middlewares/asyncHandler.js';
// import { User, Blacklist, Google } from '../models/index.js';

// import logger from '../logger/logger.js';

// import { sanitizeObject, generateAndSetTokens } from '../utils/index.js';

export const verifyUser = asyncHandler(async (req, res) => {
  try {
  } catch (error) {
    logger.error('Error verifying user:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});
