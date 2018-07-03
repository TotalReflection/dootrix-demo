console.log('Dootrix Lambda Invoked')

const AWS = require('aws-sdk');
const doClient = new AWS.DynamoDB.DocumentClient({region:'eu-west-2'});
    
exports.handler = (event, context, callback) => {
    var userID  = 1;
    console.log('userid'+ userID)
    
    var params = {
        TableName: 'posts',
        Limit:100,
        Key: {
          userID:userID,
            }
        }
    
    doClient.scan(params, function(err, data) {
        if(err) {
            callback(err, null);
        }
        else
        {
        var response = {
    "statusCode": 200,
    "headers": {
        "X-Requested-With": '*',
        "Access-Control-Allow-Headers": 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,x-requested-with',
        "Access-Control-Allow-Origin": '*',
        "Access-Control-Allow-Methods": 'POST,GET,OPTIONS'
    },
    "body": JSON.stringify(data.Items)
}
        
            callback(null, response)
        }
    });

}

    