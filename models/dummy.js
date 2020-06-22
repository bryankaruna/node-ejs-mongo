// let dummy = [
//     {id: 1, name: 'item1'},
//     {id: 2, name: 'item2'},
//     {id: 3, name: 'item3'}
// ];

// module.exports = dummy;
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const Dummy = mongoose.model('Dummy', new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}));

module.exports = Dummy;