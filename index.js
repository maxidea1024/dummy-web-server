const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Render-hosted Express!');
});

app.post('/webhook', (req, res) => {
  res.json(req.body);
});

// Request/Response logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log('Request Headers:', req.headers); console.log('Request Body:', req.body);
  // Capture response details  const originalSend = res.send;
  res.send = function (body) {
    console.log('Response Status:', res.statusCode);
    console.log('Response Body:', body);
    return originalSend.call(this, body);
  };
  next();
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
