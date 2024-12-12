const { DB }= require('../config/db')

const createPost = async (titulo, img, descripcion) => {
    const SQLQuery = "INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3)";
    const SQLValues = [titulo, img, descripcion];

    const response = await DB.query(SQLQuery, SQLValues);
    return response;
}

module.exports = {
    createPost
}