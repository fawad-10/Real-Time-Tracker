// api/track.js
const express = require('express');
const app = express();

app.get('/api/track', (req, res) => {
  res.json({ message: 'Tracking data' });
});

module.exports = app;
