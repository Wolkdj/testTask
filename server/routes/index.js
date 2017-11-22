const messageController = require("@controllers").Message

module.exports = (app) => {
    app.get("/api/message/list/:id", messageController.list)
    app.get("/api/message/single/:id", messageController.single)
    app.post("/api/message/create", messageController.validation, messageController.create)

    app.get("/api/message", (req, res) => res.status(200).send({
        message:"IM ALIVE, YUHUUUUUU"
    }))

}