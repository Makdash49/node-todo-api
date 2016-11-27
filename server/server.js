var {mongoose} = require(./db/mongoose);

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// var newTodo = new Todo({
//   text: 'Cook dinner',
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });

// var otherTodo = new Todo({
//   text: 'Something to do'
// });
//
// otherTodo.save().then((doc) => {
//   console.log('Saved todo', JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save todo', e);
// });

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
});

var user1 = new User({
  email: 'markdmcq@hotmail.com      '
});

user1.save().then((doc) => {
  console.log('Saved user:', JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save User', e);
});

// new User model.  Email password.  Todos will be associated.
// Later

// Setup email property. Require it.  Trim it.  Set type to string.  Setmin
// min length of 1.
