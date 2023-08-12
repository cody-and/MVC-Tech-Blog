const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

router.get('/', postController.getHomePage);
router.get('/:postId', postController.getPost);
router.post('/:postId/comment', postController.leaveComment);

module.exports = router;