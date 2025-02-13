// Import required packages
import express from "express";  // Web framework for Node.js
import dotenv from "dotenv";    // For loading environment variables
import path from "path";        // For handling file paths

// Load environment variables from .env file
dotenv.config();
// Get current directory path (ES modules don't have __dirname by default)
const __dirname = path.resolve();

// Get PORT from environment variables
const { PORT = 3000 } = process.env;

// Create Express application
const app = express();

// Set up view engine configuration
app.set("view engine", "ejs");  // Use EJS as the template engine
app.set("views", path.join(__dirname, "views")); // Set directory for view files

// Serve static files from 'public' directory (CSS, images, client-side JS, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Define route for homepage
app.get("/", (req, res) => {
  res.render("pages/home");  // Render the 'index' view
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
