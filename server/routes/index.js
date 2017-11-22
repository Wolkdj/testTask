const messageController = require("@controllers").Message

module.exports = (app) => {
    app.all("/api/message", function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
        return next();
      });

    app.get("/api/message/list/:id", messageController.list)
    app.get("/api/message/single/:id", messageController.single)
    app.post("/api/message/create", messageController.validation, messageController.create)

    app.get("/api/message", (req, res) => res.status(200).send({
        message:"IM ALIVE, YUHUUUUUU"
    }))

}