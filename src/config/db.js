import "dotenv/config";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  connectionTimeoutMillis: 2000,
  idleTimeoutMillis: 3000,
});

pool.on("connect", () => {
  console.log("The data base is connected !");
});

pool.on("error", (err) => {
  console.error("Server error", err);
  process.exit(-1);
});

export default pool;
