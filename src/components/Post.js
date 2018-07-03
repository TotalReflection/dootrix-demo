import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updatePost } from '../actions/postActions';

class Post extends Component {
 constructor(props) {
  super(props)
   this.state = {
    done : this.props.done,
    postID : this.props.postID,
    title: this.props.title,
    body: this.props.body,
    userID:'1'
   }
 

 this.onDone = this.onDone.bind(this);
  }

 onDone = (e) => {
  e.preventDefault();
  console.log(`hello there${this.state.done}`)
  this.setState({
   done : 'true',
   style: {backgroundColor:'green'}
  });

  const update = {
   postID : this.state.postID,
   title: this.state.title,
   body: this.state.body,
   done: 'true',
   userID:'1'
 };

 this.props.updatePost(update);

  console.log(`oh no${this.state.done}`)
 }

  render() {
    return (
     <div key={this.props.postID}>
     <h3>{this.props.title} <button style={this.state.style} onClick={this.onDone} done={this.state.done} /> </h3>
     <p>{this.props.body}</p>
    </div>
    );
  }
}

export default connect(null, { updatePost })(Post);