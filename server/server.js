var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/1234324
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  Todo.findById(id).then((todo) => {
    if (!todo) {
      res.status(404);
    }
    res.send({todo});
  }).catch((e) => res.status(400).send(e));
});

// validate id with isValid
// 404 if not valid, response. send back empty.

// findById
// success
  // if todo - send it back
  // if no todo - sned back 404 empty body
// Error
  // 400 - and send empty body back


// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));



app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
