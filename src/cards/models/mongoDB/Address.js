const mongoose = require("mongoose");

const Address = new mongoose.Schema({
            address: {
            state: {
                type: String,
                minlength: 2
            },
            country: {
                type: String,
                required: true,
                minlength: 2
            },
            city: {
                type: String,
                required: true,
                minlength: 2
            },
            street: {
                type: String,
                required: true,
                minlength: 2
            },
            houseNumber: {
                type: Number,
                required: true,
             
            },
            zip: {
                type: Number
        
            }
        }
})


module.exports.schema = Address;
