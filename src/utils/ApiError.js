class ApiError extends Error {
    constructor (
        ststusCode,
        message = "Something went wrong",
        error = [],
        statck = ""
    ){
        super (message)
        this.statusCode = ststusCode
        this.data = null
        this .message=message
        this.success=false;
        this.errors=errors

        if (stack)  {
            this.stack  = this.stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}