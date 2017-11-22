var env       = process.env.NODE_ENV || 'development';
var config    = require("@config")[env];
var validator = require("validator")
const Message = require("@model").Message


module.exports = {
    create(req, res){
        var tmp = {
            email: req.body.email,
            text: req.body.text,
            author: "unknown"
        }
        if(req.body.author && (typeof req.body.author === "string"))
            tmp.author = req.body.author
        var message = new Message(tmp)
        message.save()
        .then(() =>{
            res.status(200).json(message)
        })
        .catch(()=>{
            res.status(500).send({message:"db error"})
        })
        
    },
    list(req, res)
    {
        if(validator.isInt(req.params.id)){
            Message.paginate({}, { offset: req.params.id*config.pageSize, limit: config.pageSize })
            .then((result) => {
                if (result.docs)
                    res.status(200).json(result.docs)
                else
                    res.status(500).json({message:"no more messages"}) 
            })
            .catch((err) => {
                res.status(500).send({message:"db error"})
            });
        }
        else
            res.status(400).json({message:"incorrect id"})
    },
    single(req, res)
    {
        if(validator.isMongoId(req.params.id)){
            Message.findById(req.params.id)
            .then((message) => {
                if(message) res.status(200).json(message)
                else res.status(400).json({message:"wrong id"})
            })
            .catch((err) => {
                res.status(500).send({error:"db error"})
            })
        }
        else
            res.status(400).json({message:"incorrect id"})
    },
    validation(req, res, next){
        if(req.body.email&&req.body.text&&(typeof req.body.email === "string") && (typeof req.body.text === "string")){
            if (!validator.isEmail(req.body.email)) res.status(400).json({message:"wrong email"})
            else if (validator.isEmpty(req.body.text) || req.body.text.length > 100) res.status(400).json({message:"wrong text"})
            else next()
        }
        else {
            res.status(400).json({message:"incorrect message"})
        }
    }
}