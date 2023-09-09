import { StatusCodes } from "http-status-codes";

export class NotFoundError extends Error{
    constructor(message){
        super(message);
        this.name = 'NotFoundError';
        this.statusCodes = StatusCodes.NOT_FOUND;
    }
}


export class BadRequestError extends Error{
    constructor(message){
        super(message);
        this.name = 'BadRequestError';
        this.statusCodes = StatusCodes.BAD_REQUEST;
    }
}