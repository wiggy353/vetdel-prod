const express = require('express');
const app = express();

// Simple health check endpoint
app.get('/healthz', (req, res) => {
  res.status(200).json({
    ok: true,
    service: 'vetdel-api',
    env: process.env.NODE_ENV || 'local'
  });
});

// Whoami endpoint
app.get('/whoami', (req, res) => {
  res.json({
    service: 'vetdel-api',
    env: process.env.NODE_ENV || 'local',
    time: new Date().toISOString()
  });
});

// Root endpoint just for a friendly message
app.get('/', (req, res) => {
  res.send('VetDel API is running');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`vetdel-api listening on ${port}`);
});
