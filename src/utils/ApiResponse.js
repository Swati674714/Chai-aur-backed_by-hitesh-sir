class ApiResponse { 
    constructor (statusCode, data, messaage = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = this.message
        this.success = statusCode < 400
    }
}