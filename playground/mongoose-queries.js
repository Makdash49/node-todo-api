const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '583b918449c0302c2713773d11'
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// };


// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

// User.find({
//   _id: id
// }).then((users) => {
//   console.log('Users', users);
// });
//
// User.findOne({
//   _id: id
// }).then((user) => {
//   console.log('User', user);
// });

User.findById('583a3e6c0f6a6bc123128eb0').then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));

// query users collection.  Go into robomongo.  Get id from users collection
// Load User mongoose model.
// User.findById to query id from robo.
// 3 cases.
// No user.  "User not found"
// User found.  Print user to screen.
// Finally, handle errors.  Print error object.
// Not need for is valid.  Fill out find by id call.
