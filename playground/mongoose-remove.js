const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove();
//
// Todo.findByIdAndRemove();
Todo.findOneAndRemove({id: '583c96a101b717cb727ee69a'}).then((todo) => {

});


Todo.findByIdAndRemove('583c96a101b717cb727ee69a').then((todo) => {
  console.log(todo);
});
