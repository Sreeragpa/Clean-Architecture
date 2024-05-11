import app from "./framework/configs/app"
import { dbConnect } from "./framework/configs/dbConnection";


// Connect Database
dbConnect()

// Start the server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
