const mongoose = require("mongoose");
const Address = require("./Address");
const ImageSc = require("./ImageSc");
const app = express();

app.use(expree,json());

const CardSchema = new mongoose.schema(
    {
        title:{
            type:String,
            required:true,
            minlenght:3,
        },
        subtitle:{
            type:String,
            required:true,
            minlenght:5,
        },
        description:{
            type:String,
            required:true,
            minlenght:2,
        },
        phone:{
            type: String,
            required: true,
           match: RegExp(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/)
        },
        email:
            {
                type: String,
                required: true,
                match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                lowercase: true,
                trim:true,
                unique:true
            },
            web: {
                type: String,
                match: /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/,
            },
        image: ImageSc,
        address: Address,
      
        bizNumber: {
            type: Number,
            min: 1,
            max:8
        },
        createAt:{
            type: Date,
            default: Date.now
        },
        user_id: {
            type:  mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        likes: {
            type: [String],
            default: []
        },
    }
)

const Card = mongoose.model("Card", CardSchema);
module.exports = Card;