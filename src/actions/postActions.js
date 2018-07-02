import { FETCH_POSTS, NEW_POST } from './types';

var getHeaders = new Headers();
var getParams = { method: 'GET',
               headers: getHeaders,
               mode: 'cors',
               cache: 'default' };

export const fetchPosts = () => dispatch => {
  fetch('https://nbv21y1t0h.execute-api.eu-west-2.amazonaws.com/db-handler/db-handler',getParams)
  .then(res => {console.log("hey " +JSON.stringify(res));
    return res.json()})
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    
    );
};


export const createPost = postData => dispatch => {
  fetch('https://nbv21y1t0h.execute-api.eu-west-2.amazonaws.com/db-handler/db-handler', {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin' : '*',
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post.body[0]
      })
    );
};
