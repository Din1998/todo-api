const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/routes');
const app = express();
const cors = require('cors');
const bodyParser = require ('body-parser');


app.use(bodyParser.json())

app.use('/api/tasks',router);

app.use(cors({
  origin: 'http://localhost:3000'
}));


app.use(express.json());





const dbURI = 'mongodb+srv://din-todo-app-777:01777128803@todo-app.4xjhe.mongodb.net/todolist?retryWrites=true&w=majority'
mongoose.connect(dbURI ,{useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => app.listen(4000))
.catch((err) => console.log(err))