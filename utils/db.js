import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const db = new pg.Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

const connectDB = async () => {
  try {
    await db.connect();
    console.log("Connected database successfully");
  } catch (err) {
    console.log("Couldn't connect with the database", err);
    process.exit(1);
  }
};

connectDB();

db.on("error", (err) => {
  console.log("Database error:", err);
  process.exit(1);
});

export const query = async (text, params) => {
  return await db.query(text, params);
};
