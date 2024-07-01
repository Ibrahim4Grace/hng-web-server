import asyncHandler from '../middlewares/asyncHandler.js';
import axios from 'axios';
import logger from '../logger/logger.js';
import customEnv from '../customEnv.js';

// import { sanitizeObject, generateAndSetTokens } from '../utils/index.js';

export const checkWeather = asyncHandler(async (req, res) => {
  try {
    const visitorName = req.query.visitor_name || 'Guest';
    const location = req.query.location;
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    // Fetch weather data from WeatherAPI
    const weatherResponse = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${customEnv.weatherApiKey}&q=${location}`
    );
    const temperature = weatherResponse.data.current.temp_c;

    res.json({
      client_ip: clientIp,
      location: location,
      greeting: `Hello, ${visitorName}!, the temperature is ${temperature} degrees Celsius in ${location}`,
    });
  } catch (error) {
    logger.error('Error verifying user:', error);
  }
});
