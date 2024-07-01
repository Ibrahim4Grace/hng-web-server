import dotenv from 'dotenv';
dotenv.config();

const customEnv = {
  port: process.env.PORT,

  nodeEnv: process.env.NODE_ENV || 'development',

  weatherApiKey: process.env.WEATHER_API_KEY,
  ipinfoToken: process.env.IPINFO_TOKEN,

  baseUrl:
    process.env.NODE_ENV === 'development'
      ? process.env.DEV_BASE_URL
      : process.env.PROD_BASE_URL,
};

export default customEnv;
