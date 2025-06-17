const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Render-hosted Express!');
});

app.post('/webhook', (req, res) => {
  res.json(req.body);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
