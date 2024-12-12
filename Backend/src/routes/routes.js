const { Router } = require('express');
const { handleCreatePost, handleGetPosts } = require('../controllers/index');

const router = Router();

router.get('/posts', handleGetPosts);
router.post('/posts', handleCreatePost);

module.exports = router