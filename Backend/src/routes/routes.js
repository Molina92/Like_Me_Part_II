const { Router } = require('express');
const { handleCreatePost } = require('../controllers/index');

const router = Router();

router.post('/posts', handleCreatePost);

module.exports = router