require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

// Security and utility middlewares
app.use(helmet());
app.use(cors({
  origin: 'http://localhost:5173', // Update this to match your frontend dev server port
  credentials: true
}));
app.use(express.json()); // Parses incoming JSON requests
app.use(morgan('dev')); // Logs requests to the console

// Basic Health Check Route
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'SabkaLoan API is running smoothly 🚀',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware for unhandled routes
app.use((req, res, next) => {
  res.status(404).json({
    status: 'error',
    message: `Route ${req.originalUrl} not found`
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`========================================`);
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV}`);
  console.log(`========================================`);
});
