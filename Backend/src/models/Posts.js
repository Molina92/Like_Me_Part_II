const { DB } = require('../config/db')

const getPosts = async () => {

    try {
        const SQLQuery = "SELECT * FROM posts ORDER BY id ASC";
        const { rowCount, rows } = await DB.query(SQLQuery);
        return { rowCount, rows };
    
    } catch (error) {
        throw error
    }

}

const createPost = async (titulo, img, descripcion, likes) => {

    try {
        const SQLQuery = "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0) returning *";
        const SQLValues = [titulo, img, descripcion];

        const { rowCount, rows } = await DB.query(SQLQuery, SQLValues);
        return { rowCount, rows };

    } catch (error) {
        throw error
    }

}

const updatePost = async (id) => {

    try {
        const SQLQuery = "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *";
        const SQLValues = [id];
        const { rowCount, rows } = await DB.query(SQLQuery, SQLValues);
        return { rowCount, rows };
    
    } catch (error) {
        throw error
    }

}

const deletePost = async (id) => {

    try {
        const SQLQuery = "DELETE FROM posts WHERE id = $1 RETURNING *";
        const SQLValues = [id];
        const { rowCount, rows } = await DB.query(SQLQuery, SQLValues);
        return { rowCount, rows };
    
    } catch (error) {
        throw error
    }

}

const exist = async (id) => {

    try {
        const SQLQuery = "SELECT * FROM posts WHERE id = $1";
        const SQLValues = [id];

        const { rowCount } = await DB.query(SQLQuery, SQLValues);
        return rowCount ? true : false;
    } catch (error) {
        throw error
    }

}

module.exports = {
    createPost,
    getPosts,
    updatePost,
    deletePost,
    exist
}