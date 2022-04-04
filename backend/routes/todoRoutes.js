const router = require("express").Router();
const Todo = require("../models/Todo")

/* This is a GET request. It is used to retrieve data from the database. */
router.get("/", (req, res) => {
// eslint-disable-next-line array-callback-return
    Todo.find((err, result) => {
     if(err) throw new Error(err)
        res.json(result);
    })
})

/* This is creating a new document in the database. */
router.post("/", (req, res) => {
    Todo.create(req.body, (err, result) => {
        if(err) throw new Error(err)
        res.json(result);
    })
})

/* This is a put request. It is used to update a document. */
router.put("/:id", (req, res) => {
    Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => {
        if(err) throw new Error(err);
        res.json(result);
    })
})

/* This is a delete request. */
router.delete("/:id", (req, res) => {
    Todo.findOneAndRemove({ _id: req.params.id }, (err, result) => {
        if(err) throw new Error(err)
        res.end()
    })
})

module.exports = router;