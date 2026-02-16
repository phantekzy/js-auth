//Imports
import "dotenv/config";
import { Pool } from "pg";

// Pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 3000,
  connectionTimeoutMillis: 5000,
});

// Connection
pool.on("connect", () => {
  console.log("HIHA the DB is connected lotfi");
});

// Error
pool.on("error", (err) => {
  console.error("Server Error", err);
  process.exit(-1);
});

// Export
export default pool;
