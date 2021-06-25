export class AlreadyExists extends Error {
    statusCode = 400
    constructor(){
        super("item already exists")
    }
}

export class Unauthorized extends Error {
    statusCode = 401
    constructor(reason: string) {
        super(reason)
    }
}

export class BadRequest extends Error {
    statusCode = 400
}

export class Forbidden extends Error {
    statusCode = 403
}

export class NotFound extends Error {
    statusCode = 404
    constructor(item: string) {
        super(item+" not found");
    }
}

import {ErrorObject} from "ajv"

export class ValidationError extends Error {
    statusCode = 400;
    public listOfErrors: any;
    constructor(errors: ErrorObject[]) {
        super("validation error");
        this.listOfErrors = errors.map(error => ({ field: error.instancePath.split('/').pop(), error: error.message }));
    }
}