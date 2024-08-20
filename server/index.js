const express = require('express');
const sequelize = require('./config/database');
// const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Sinkronisasi dengan database
sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
