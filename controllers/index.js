const data = require('../models/data');

exports.get_data = function(req, res) {
    
    console.log(data);
    return res.render('index', {data: data});
};

exports.post_data = function(req, res) {
    console.log(process.env.SECRET_KEY);
    
    let idGenerator = data.length;
    console.log(idGenerator);
    let newItem = {id: idGenerator+1, name: 'item'+(idGenerator+1)};
    data.push(newItem);
    return res.render('index', {data: data});
};