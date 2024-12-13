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

const handleUpdatePost = async (req, res) => {
    const { id } = req.params;
    const { likes } = req.body;
    
    const response = await Posts.updatePost(id, likes);
    
    res.status(200).json({
        msg: 'Post actualizado con exito',
        data: response
    });
}

const handleDeletePost = async (req, res) => {
    const { id } = req.params;
    
    const response = await Posts.deletePost(id);
    
    res.status(200).json({
        msg: 'Post eliminado con exito',
        data: response
    });
}

module.exports = {
    handleCreatePost,
    handleGetPosts,
    handleUpdatePost,
    handleDeletePost
}