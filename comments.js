// Create web server
const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));
app.get('/comments', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'comments.html'));
});
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
