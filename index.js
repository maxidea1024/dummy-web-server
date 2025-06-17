const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Render-hosted Express!');
});

// Apply bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/webhook', (req, res) => {
  console.log('Webhook received:', req.body);

  res.json(req.body);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
