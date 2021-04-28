const { makeJsonResponse } = require('../util')

module.exports.handler = async event => {
  return makeJsonResponse(200, {
    message: 'Go Serverless v1.0! Your function executed successfully!',
    input: event,
  })
};
