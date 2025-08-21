
const mongoose = require('mongoose');


const ImageSc = new mongoose.schema(  {
     image: {
            url: {
                type: String,
                match: /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/,
            },
            alt: {
                type: String,
                minlength: 2
            }
}
})


module.exports.schema = ImageSc;