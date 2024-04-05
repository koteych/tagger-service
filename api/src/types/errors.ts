export class HttpError extends Error {
    constructor(public status: number, public message: string) {
        super(message);
        this.name = this.constructor.name;
    }
}

export class NotFoundError extends HttpError {
    constructor(message: string = 'Not Found') {
        super(404, message);
    }
}

export class BadRequestError extends HttpError {
    constructor(message: string = 'Bad Request') {
        super(400, message);
    }
}
