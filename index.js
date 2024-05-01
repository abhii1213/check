const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// Route for testing
app.get("/check", (req, res) => {
  res.status(200).json({ message: "Success! The server is running." });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
