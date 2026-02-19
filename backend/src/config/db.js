import "dotenv/config";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 3000,
  connectionTimeoutMillis: 5000,
});

pool.on("connect", () => {
  console.log("The Database is connected");
});

pool.on("error", (err) => {
  console.error("Server Error", err);
  process.exit(-1);
});

export default pool;
