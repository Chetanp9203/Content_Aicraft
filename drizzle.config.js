/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/Schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://AICraft_owner:Zm0EK5HrVTOI@ep-odd-hall-a11o6qce.ap-southeast-1.aws.neon.tech/AICraft?sslmode=require',
    }
  };