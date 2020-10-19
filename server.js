const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection; connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const usersRouter=require('./routes/users');
const hotelsRouter=require('./routes/hotels');
const favoritesRouter=require('./routes/favorites');
const favRouter=require('./routes/fav');

app.use('/users', usersRouter);
app.use('/hotels', hotelsRouter);
app.use('/favorites', favoritesRouter);
app.use('/fav', favRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});