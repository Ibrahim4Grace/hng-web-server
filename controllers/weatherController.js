import asyncHandler from '../middlewares/asyncHandler.js';
import axios from 'axios';
import logger from '../logger/logger.js';
import customEnv from '../customEnv.js';

export const welcome = asyncHandler(async (req, res) => {
  res.send("nav to '/api/hello?visitor_name' ");
});

export const checkWeather = asyncHandler(async (req, res) => {
  try {
    const visitorName = req.query.visitor_name || 'Mark';
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    // Fetch weather data from WeatherAPI using auto:ip
    const weatherResponse = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${customEnv.weatherApiKey}&q=auto:ip`
    );

    // Log the weatherResponse data for debugging
    console.log('Weather Response Data:', weatherResponse.data);

    const location = weatherResponse.data.location.name;
    const temperature = weatherResponse.data.current.temp_c;

    res.json({
      client_ip: clientIp,
      location: location,
      greeting: `Hello, ${visitorName}!, the temperature is ${temperature} degrees Celsius in ${location}`,
    });
  } catch (error) {
    logger.error('Error verifying user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
