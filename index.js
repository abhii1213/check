const express = require("express");
const app = express();

// Route for testing
app.get("/check", (req, res) => {
  res.status(200).json({ message: "Success! The server is running." });
});

// Start the server
app.listen(5000, () => {
  console.log(`Server is running`);
});
