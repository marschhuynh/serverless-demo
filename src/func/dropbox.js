// https://www.dropbox.com/s/scyulzd34drs9o1/15702210_xl.jpg?dl=0

const httpStatus = require('http-status')
const { makeJsonResponse, makeErrorResponse } = require('../util')

module.exports.handler = async event => {
    const { link } = event.queryStringParameters || {}

    if (!link) {
        return makeErrorResponse(422, 'Link is required!')
    }

    const directLink = link.replace('www.dropbox.com', 'dl.dropboxusercontent.com')

    return makeJsonResponse(200, {
        'direct-link': directLink,
    })
};
