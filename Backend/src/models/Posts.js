const { DB }= require('../config/db')

const getPosts = async () => {
    const SQLQuery = "SELECT * FROM posts";
    const response = await DB.query(SQLQuery);
    return response;
}

const createPost = async (titulo, img, descripcion, likes) => {
    const SQLQuery = "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0) returning *";
    const SQLValues = [titulo, img, descripcion];

    const { rowCount, rows } = await DB.query(SQLQuery, SQLValues);
    return { rowCount, rows };
}

module.exports = {
    createPost,
    getPosts
}