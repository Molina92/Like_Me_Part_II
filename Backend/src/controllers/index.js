const Posts = require('../models/Posts');

const handleGetPosts = async (req, res, next) => {

    try {
        const response = await Posts.getPosts();
        res.status(200).json({
            msg: 'Posts obtenidos con exito',
            data: response
        });

    } catch (error) {
        next(error);
    }
}

const handleCreatePost = async (req, res, next) => {

    try {
        const { titulo, img, descripcion } = req.body;
        const response = await Posts.createPost(titulo, img, descripcion);
        res.status(200).json({
            msg: 'Post creado con exito',
            data: response
        });

    } catch (error) {
        next(error);
    }
}

const handleUpdatePost = async (req, res, next) => {

    try {
        const { id } = req.params;
        const { likes } = req.body;

        const exists = await Posts.exist(id);
        if (!exists) {
            throw new Error('Post_Update_Not_Found');
        }

        const response = await Posts.updatePost(id, likes);
        res.status(200).json({
            msg: 'Post actualizado con exito',
            data: response
        });

    } catch (error) {
        next(error);
    }
}

const handleDeletePost = async (req, res, next) => {

    try {
        const { id } = req.params;

        const exists = await Posts.exist(id);
        if (!exists) {
            throw new Error('Post_Delete_Not_Found');
        }

        const response = await Posts.deletePost(id);
    
        res.status(200).json({
            msg: 'Post eliminado con exito',
            data: response
        });

    } catch (error) {
        next(error);
    }
}

module.exports = {
    handleCreatePost,
    handleGetPosts,
    handleUpdatePost,
    handleDeletePost
}