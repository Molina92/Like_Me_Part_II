const { DB } = require('../config/db')

const getPosts = async () => {
    const SQLQuery = "SELECT * FROM posts ORDER BY id ASC";
    const response = await DB.query(SQLQuery);
    return response;
}

const createPost = async (titulo, img, descripcion, likes) => {
    const SQLQuery = "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0) returning *";
    const SQLValues = [titulo, img, descripcion];

    const { rowCount, rows } = await DB.query(SQLQuery, SQLValues);
    return { rowCount, rows };
}

const updatePost = async (id) => {
    const SQLQuery = "UPDATE posts SET likes = likes + 1 WHERE id = $1";
    const SQLValues = [id];
        
    result = await DB.query(SQLQuery, SQLValues);
    console.log(result);
}

const deletePost = async (id) => {
    const SQLQuery = "DELETE FROM posts WHERE id = $1";
    const SQLValues = [id];
        
    result = await DB.query(SQLQuery, SQLValues);
}

module.exports = {
    createPost,
    getPosts,
    updatePost,
    deletePost
}