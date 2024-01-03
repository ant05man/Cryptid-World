const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Your other routes and middleware

// Handle favicon request
app.get('/favicon.ico', (req, res) => {
  // Respond with a placeholder favicon or an empty response
  res.status(204).end();
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
