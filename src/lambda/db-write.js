console.log('Dootrix Lambda Invoked')

const AWS = require('aws-sdk');
const doClient = new AWS.DynamoDB.DocumentClient({
 region: 'eu-west-2'
});
const crypto = require('crypto');


exports.handler = (event, context, callback) => {

 const request = JSON.parse(event.body)
 var body = request.body;
 var title = request.title;
 var done = request.done;
 var userID = '1';


 var current_date = (new Date()).valueOf().toString();
 var random = Math.random().toString();
 var postID = crypto.createHash('sha1').update(current_date + random).digest('hex');

 var params = {
  TableName: 'posts',
  Item: {
   postID: postID,
   userID: userID,
   body: body,
   title: title,
   done: done,
   targetdate: Date.now().parse,
  }
 }


 doClient.put(params, function (err, data) {
  if (err) {
   callback(err, null);
  } else {
   var response = {
    "statusCode": 200,
    "headers": {
     "X-Requested-With": '*',
     "Access-Control-Allow-Headers": 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,x-requested-with',
     "Access-Control-Allow-Origin": '*',
     "Access-Control-Allow-Methods": 'POST,GET,OPTIONS'
    },
    "body": JSON.stringify({
     "postID": postID,
     "userID": userID,
     "body": body,
     "title": title,
     "done": done
    })
   }

   callback(null, response)
  }
 });

}