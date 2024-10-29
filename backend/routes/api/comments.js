/**
 * Express router providing comment related routes.
 * @module routes/api/comments
 */

const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

/**
 * Get all comments.
 * @name GET/api/comments
 * @function
 * @memberof module:routes/api/comments
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {JSON} - A JSON object containing all comments
 */

/**
 * Create a new comment.
 * @name POST/api/comments
 * @function
 * @memberof module:routes/api/comments
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {JSON} - A JSON object containing the created comment
 */

/**
 * Delete a comment by id.
 * @name DELETE/api/comments/:id
 * @function
 * @memberof module:routes/api/comments
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {JSON} - A JSON object containing the deleted comment
 */

/**
 * Update a comment by id.
 * @name PATCH/api/comments/:id
 * @function
 * @memberof module:routes/api/comments
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {JSON} - A JSON object containing the updated comment
 */

module.exports = router;

router.get("/", async (req, res) => {
  const comments = await Comment.find();
  res.json({ comments });
})

router.post("/", async (req, res) => {
    const comment = new Comment(req.body.comment);
    await comment.save();
    res.json({ comment });
  });

    router.delete("/:id", async (req, res) => {
    const comment = await Comment.findById(req.params.id);
    await comment.remove();
    res.json({ comment });
});

router.patch("/:id", async (req, res) => {
    const comment = await Comment.findById(req.params.id);
    comment.set(req.body.comment);
    await comment.save();
    res.json({ comment });
});
