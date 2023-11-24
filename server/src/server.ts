import express from 'express';
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req: any, res:any) => {
  res.send('MFlix Server V1.0!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});