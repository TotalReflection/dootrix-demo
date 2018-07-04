import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePost } from '../actions/postActions';
import { CSSTransition } from 'react-transition-group';
import '../animation.css';
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
  const update = {
   postID : this.state.postID,
   title: this.state.title,
   body: this.state.body,
   done: 'true',
   userID:'1'
 };
 this.props.updatePost(update);


 }

  render() {
    let style = this.props.done === 'true' ? {backgroundColor:'green', color:'white'}: {};
    let date = new Date(this.props.targetdate);
    let { done } = this.state;
    return (
     <div className={"post-wrapper"} key={this.props.postID}>
     <span className={"post-header"}>
     <span className={"post-title"}>{this.props.title}</span>   <span className={"post-date"}>{date.toLocaleString()}</span>
   

     <span className={"post-button"}>
      <button className={"button-reset button-add"} style={style} onClick={this.onDone} done={this.state.done}>
     ✓
     </button>
     </span>
     </span>
    
     <div className={"post-body"}>{this.props.body}</div>
    </div>
    );
  }
}

export default connect(null, { updatePost })(Post);
