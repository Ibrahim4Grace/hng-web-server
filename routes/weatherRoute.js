import express from 'express';

import { checkWeather } from '../controllers/weatherController.js';

const router = express.Router();

router.route('/api/hello').get(checkWeather);

export default router;
