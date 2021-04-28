const httpStatus = require('http-status')

const makeJsonResponse = (code, data) => {
    return {
        statusCode: code,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(data)
    }
}

const makeErrorResponse = (code, message) => {
    const _message = `${code}_MESSAGE`
    const _name = `${code}_NAME`
    return {
        statusCode: code,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            error: httpStatus[_name],
            message: httpStatus[_message],
            detail: message
        })
    }
}

module.exports = {
    makeJsonResponse,
    makeErrorResponse
}