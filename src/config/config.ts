import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  ODATAURL: process.env.URL,
};

export default config;
