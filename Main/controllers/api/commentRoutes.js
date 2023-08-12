const express = require('express');
const router = express.Router();

const commentController = require('../controllers/commentController');

router.post('/:commentId/edit', commentController.editComment);
router.post('/:commentId/delete', commentController.deleteComment);

module.exports = router;