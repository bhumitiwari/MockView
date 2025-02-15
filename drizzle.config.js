
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_5pdJRjc7CMBS@ep-dry-dew-a8skqd2o-pooler.eastus2.azure.neon.tech/MockView?sslmode=require"
  },
});
