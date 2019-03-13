const Channel = require("../model/Channel_Model")
module.exports = (router) => {

    router.get("/AllChannel", (req, res) => {
        Channel.find({}, (err, data) => {
            if (err) {
                res.json({ success: false, message: err })
            }
            if (data.length > 0) {
                res.json(data)
            } else {
                res.json("No Channel Available")
            }
        })
    })
    return router
}