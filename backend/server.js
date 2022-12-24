require("dotenv").config();
const express = require('express');
const connectDB = require("./config/db");
const productRoutes = require('./routes/productRoutes')
const path = require('path');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/products', productRoutes);

const __dirname = path.resolve();

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'frontend/build/index.html'))
    });
} else {
    app.get('/', (req, res) => {
        res.send("Api is running...");
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));