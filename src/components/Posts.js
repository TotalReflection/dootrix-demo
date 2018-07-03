import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import Post from './Post'

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    } else if (nextProps.updatePost){
      this.props.posts =  this.props.posts.map(item => {
        if(item.postID === nextProps.updatePost.postID){
          return { ...item, ...nextProps.updatePost }
        }
        return item
      })
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <Post key={post.postID} postID={post.postID} title={post.title} done={post.done.toString()} body={post.body} />
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object,
  updatePost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item,
  updatePost: state.posts.update
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
