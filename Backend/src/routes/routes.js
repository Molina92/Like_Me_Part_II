const { Router } = require('express');
const { handleCreatePost, handleGetPosts, handleUpdatePost, handleDeletePost } = require('../controllers/index');

const router = Router();

router.get('/posts', handleGetPosts);
router.post('/posts', handleCreatePost);
router.put('/posts/like/:id', handleUpdatePost);
router.delete('/posts/:id', handleDeletePost);

module.exports = router