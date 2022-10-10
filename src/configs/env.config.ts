import * as dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'JWT_SECRET';
const PORT = process.env.PORT || '3000';

export const envConfig = {
  JWT_SECRET,
  PORT,
};
