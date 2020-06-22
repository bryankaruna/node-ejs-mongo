const Dummy = require('../models/dummy');

exports.get_data = async function(req, res) {
    
    const data = await Dummy.find();
    return res.render('index', {data: data});
};

exports.post_data = async function(req, res) {
    // test env variables
    console.log(process.env.SECRET_KEY);

    //initial
    let data = await Dummy.find();
    
    let newItem = new Dummy({
        id: data.length+1, 
        name: 'item'+(data.length+1)
    });
    newItem.save();

    //refresh
    data = await Dummy.find();
    return res.render('index', {data: data});
};