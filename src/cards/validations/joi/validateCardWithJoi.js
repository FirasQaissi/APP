const joi = require('joi');


const validateCardWithJoi = (card) => {

const urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/

    const schema = joi.object(
        {
            title : joi.string().min(2).max(256).required(),
            subtitle : joi.string().min(2).max(256).required(),
            description : joi.string().min(2).max(1024).required(),
            phone: joi.string()
            .ruleset.regex(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/)
            .rule({message:"Phone number must be in the format 0XX-XXX-XXXX"})
            .required(),
            web: joi.string()
             .ruleset.regex(urlRegex)
            .rule({message:"Card web must be a valid URL"})
            .allow(""),
            email: joi.string()
            .ruleset.regex(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
            .rule({message:"Card email must be Valid mail"})
            .required(),
            image: joi.object().keys({
                url: joi.string()
                .ruleset.regex(urlRegex)
            .rule({message:"card image must be a valid URL"})
            .allow(""),
            alt: joi.string().min(2).max(256)
            
            }),

            address:joi.object().keys({
                state:joi.string().min(2).max(256).required(),
                country : joi.string().min(2).max(256).required(),
                city: joi.string().min(2).max(256).required(),
                street: joi.string().min(2).max(256).required(),
               houseNumber: joi.number().greater(0).required(),
               zip:joi.number().min(1).max(99999).required(),
            }),
            bizNumber: joi.number(),
            user_id:joi.string().required(),   
        } )
   
       return schema.validate(card);
}

module.exports = validateCardWithJoi;