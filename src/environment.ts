import dotenv from "dotenv";

dotenv.config();

// FIXME: Verify that value in env is exists
export default {
  EXPRESS_PORT: process.env.EXPRESS_PORT
};
