import express from 'express';

import { checkWeather, welcome } from '../controllers/weatherController.js';

const router = express.Router();

router.route('/').get(welcome);

router.route('/api/hello').get(checkWeather);

export default router;
