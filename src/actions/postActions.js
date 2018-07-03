import { FETCH_POSTS, NEW_POST, UPDATE_POST } from './types';

var getHeaders = new Headers({'Content-Type': 'application/json',
'userID':'1'});
var getParams = { method: 'GET',
               headers: getHeaders,
               mode: 'cors',
               cache: 'default' };

export const fetchPosts = () => dispatch => {
  fetch('https://nbv21y1t0h.execute-api.eu-west-2.amazonaws.com/db-handler/db-handler',getParams)
  .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts.sort( (a,b) => b.targetdate - a.targetdate) 
      })
    
    );
};


export const createPost = postData => dispatch => {
  console.log("Client Requested" + JSON.stringify(postData));
  var postHeaders = new Headers({'Content-Type': 'application/json'});
  var postParams = { method: 'POST',
               headers: postHeaders,
               mode: 'cors',
               cache: 'default',
                body: JSON.stringify(postData)
              };
  fetch('https://nbv21y1t0h.execute-api.eu-west-2.amazonaws.com/db-handler/db-handler', postParams)
    .then(res => res.json())
    .then(post =>{
      console.log("Server Returned" + JSON.stringify(post));
      return dispatch({
        type: NEW_POST,
        payload: post
      })
    }
    );
};



export const updatePost = postData => dispatch => {
  console.log("Client Requested" + JSON.stringify(postData));
  var updateHeaders = new Headers({'Content-Type': 'application/json'});
  var updateParams = { method: 'PUT',
               headers: updateHeaders,
               mode: 'cors',
               cache: 'default',
                body: JSON.stringify(postData)
              };
  fetch('https://nbv21y1t0h.execute-api.eu-west-2.amazonaws.com/db-handler/db-handler', updateParams)
    .then(res => res.json())
    .then(post =>{
      console.log("Server Returned" + JSON.stringify(post));
      return dispatch({
        type: UPDATE_POST,
        payload: JSON.parse(post.body)
      })
    }
    );
};
