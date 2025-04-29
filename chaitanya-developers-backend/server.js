const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
  try {
    // MongoDB Atlas connection string with URL-encoded password
    const MONGODB_URI = 'mongodb+srv://manohar:Manu%409878@cluster0.o6tm4ja.mongodb.net/chaitanya-developers?retryWrites=true&w=majority&appName=Cluster0';
    
    console.log('Attempting to connect to MongoDB...');
    const conn = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB Connection Error:', error.message);
    process.exit(1);
  }
};

// Connect to MongoDB
connectDB();

// Plot Schema
const plotSchema = new mongoose.Schema({
  projectId: String,
  plotId: Number,
  status: String,
  boughtBy: String,
  soldBy: String,
});

const Plot = mongoose.model('Plot', plotSchema);

// API Routes
app.get('/api/plots/:projectId', async (req, res) => {
  try {
    const plots = await Plot.find({ projectId: req.params.projectId });
    res.json(plots);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/plots', async (req, res) => {
  try {
    const plot = new Plot(req.body);
    const savedPlot = await plot.save();
    res.status(201).json(savedPlot);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.put('/api/plots/:id', async (req, res) => {
  try {
    const updatedPlot = await Plot.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedPlot);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete('/api/plots/:id', async (req, res) => {
  try {
    await Plot.findByIdAndDelete(req.params.id);
    res.json({ message: 'Plot deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Initialize plots for a project
app.post('/api/plots/initialize/:projectId', async (req, res) => {
  try {
    const { totalPlots } = req.body;
    const plots = [];
    
    for (let i = 1; i <= totalPlots; i++) {
      plots.push({
        projectId: req.params.projectId,
        plotId: i,
        status: 'available',
        boughtBy: '',
        soldBy: '',
      });
    }
    
    await Plot.insertMany(plots);
    res.status(201).json({ message: 'Plots initialized successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start server with error handling
const PORT = 5001; // Changed from 5000 to 5001
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Please try a different port.`);
    process.exit(1);
  } else {
    console.error('Server error:', err);
    process.exit(1);
  }
}); 