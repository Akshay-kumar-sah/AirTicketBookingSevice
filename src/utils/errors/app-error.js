

class AppError extends Error {


    constructor (
        name,
        message,
        expalnation,
        statusCode
    ){

        super();
        this.name = name,
        this.message = message,
        this.expalnation = expalnation,
        this.statusCode = statusCode

    }
}

module.exports = AppError;