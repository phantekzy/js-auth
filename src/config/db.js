import pkg from "pg";
const { Pool } = pkg;
import "dotenv/config";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on("connect", () => {
  console.log("PostgreSQL connected successfully");
});
pool.on("error", (err) => {
  console.log("Unexpected error on idle client", err);
  process.exit(-1);
});
export default pool;
