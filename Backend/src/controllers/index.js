const Posts = require('../models/Posts');

const handleGetPosts = async (req, res) => {
    const response = await Posts.getPosts();
    res.status(200).json({
        msg: 'Posts obtenidos con exito',
        data: response
    });
}

const handleCreatePost = async (req, res) => {
    const { titulo, img, descripcion } = req.body;
    
    const response = await Posts.createPost(titulo, img, descripcion);
    
    res.status(200).json({
        msg: 'Post creado con exito',
        data: response
    });
}

module.exports = {
    handleCreatePost,
    handleGetPosts
}