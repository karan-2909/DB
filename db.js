const { response } = require('express');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://KaranNS:Telnzwf7vwHlvJrr@karanns.4kci7o4.mongodb.net/?retryWrites=true&w=majority", {
    useunifiedTopology: true,
    useNewUrlParser: true,

})
    .then((response) => {
        console.log("Connected to Database");
    })
    .catch((error) => {
        console.log(error);
    });