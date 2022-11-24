import * as dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'JWT_SECRET';
const PORT = process.env.PORT || '3000';
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/d-project';

export const envConfig = {
  JWT_SECRET,
  PORT,
  MONGODB_URI,
};
