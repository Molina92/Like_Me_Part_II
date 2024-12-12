const { DB }= require('../config/db')

const createPost = async (titulo, img, descripcion, likes) => {
    const SQLQuery = "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0)";
    const SQLValues = [titulo, img, descripcion];

    const response = await DB.query(SQLQuery, SQLValues);
    return response;
}

module.exports = {
    createPost
}