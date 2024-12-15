module.exports = {

    'Post_Delete_Not_Found': {
        id: 'Post_Not_Found',
        statusCode: 404,
        message: 'Post no encontrado',
        description: 'El post a eliminar con el id ingresado no se encuentra en la base de datos'
    },

    'Post_Update_Not_Found': {
        id: 'Post_Not_Found',
        statusCode: 404,
        message: 'Post no encontrado',
        description: 'El post a actualizar con el id ingresado no se encuentra en la base de datos'
    },

    'Server_Error': {
        id: 'Server_Error',
        statusCode: 500,
        message: 'Error del servidor',
        description: 'Ha ocurrido un error en el servidor'
    }

}