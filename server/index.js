const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const graphpqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');
const app = express();

//allow cross origin requests
app.use(cors());

const MONGO_URI = `mongodb://v1:v123456@ds159993.mlab.com:59993/v1`;
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI,{useNewUrlParser: true});
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));
app.use(bodyParser.json());
app.use('/graphql',graphpqlHTTP({
    schema,
    graphiql:true // Enabe graphiql tool
}));
app.listen(4000, ()=>{
    console.log('App lisiting...');
});