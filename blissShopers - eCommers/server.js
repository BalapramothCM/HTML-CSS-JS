import { connectToDB } from "./config/database.js";
import app from "./index.js";

const url = process.env.DB_URI;
const PORT = process.env.PORT

app.listen(PORT, async (err) => {
   if (err) {
      console.error(`Error occurred while starting the server on port ${PORT}:`, err);
   } else {
      console.log(`Server is successfully listening on port ${PORT}`);
       await connectToDB(url);
   }
});