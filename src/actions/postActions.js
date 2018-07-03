import { FETCH_POSTS, NEW_POST } from './types';

var getHeaders = new Headers({});
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
        payload: posts
      })
    
    );
};



export const createPost = postData => dispatch => {
  console.log("huh" + JSON.stringify(postData));
  var postHeaders = new Headers({});
  var postParams = { method: 'POST',
               headers: postHeaders,
               mode: 'cors',
               cache: 'default',
                body: JSON.stringify(postData)
              };
  fetch('https://nbv21y1t0h.execute-api.eu-west-2.amazonaws.com/db-handler/db-handler', postParams)
    .then(res => res.json())
    .then(post =>{
      console.log("heyya" + JSON.stringify(post));
      return dispatch({
        type: NEW_POST,
        payload: post
      })
    }
    );
};
