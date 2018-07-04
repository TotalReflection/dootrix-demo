console.log('Dootrix Lambda Invoked')

const AWS = require('aws-sdk');
const doClient = new AWS.DynamoDB.DocumentClient({
 region: 'eu-west-2'
});

exports.handler = (event, context, callback) => {

try {
 const request = event.body;
 var postID = request.postID;
 var body = request.body;
 var done = request.done;
 var userID = request.userID;
 var title = request.title;
 var done = request.done;
 var targetDate = targetDate;
}catch(err){
  callback(err, null)
}

 var params = {
  TableName: 'posts',
  Key: {
   'postID': postID,
   'userID': userID
  },
   UpdateExpression: 'SET #done = :status',
     ExpressionAttributeValues: {
    ":status": "true",
  },
  ExpressionAttributeNames: {
    "#done": "done"
  },
        ReturnValues: 'UPDATED_NEW'
 }


 doClient.update(params, function (err, data) {
  if (err) {
   err.deets = request;
   callback(err, null);
  } else {
   var response = {
    "statusCode": 200,
    "headers": {
     "X-Requested-With": '*',
     "X-Content-Type-Options": 'nosniff',
     "Access-Control-Allow-Headers": 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,x-requested-with,userID',
     "Access-Control-Allow-Origin": '*',
     "Access-Control-Allow-Methods": 'POST,GET,OPTIONS,PUT'
    },
    "body": JSON.stringify({
     "postID": postID,
     "userID": userID,
     "body": body,
     "title": title,
     "done": done,
     "targetDate":targetDate
    })
   }

   callback(null, response)
  }
 });

}