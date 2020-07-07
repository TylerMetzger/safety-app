exports.NotFoundError = class extends Error {
    constructor() {
        super();
        this.name = this.constructor.name;
        this.message = "ID not found";
        this.httpErrorCode = 404;
        Error.captureStackTrace(this, this.constructor);
    }
}

exports.InvalidIdError = class extends Error {
    constructor() {
        super();
        this.name = this.constructor.name;
        this.message = "Invalid ID";
        this.httpErrorCode = 400;
        Error.captureStackTrace(this, this.constructor);
    }
}