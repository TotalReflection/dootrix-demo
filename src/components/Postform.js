import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';
import { CSSTransition } from 'react-transition-group';
import '../animation.css';
class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      showForm:false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
      if (this.state.title && this.state.body){
    const post = {
      title: this.state.title,
      body: this.state.body,
      done: false,
      userID:"1"
    };
    this.setState(this.showForm:false);
    this.props.createPost(post);
    this.setState({
      title:'',
      body:''
    })
  }
  else{
    window.alert("You must input both an Event and Details");
  }
  }

  render() {

    let {
      showForm
    } = this.state;

    return (
      <div className={"hide-wrapper app-max"}>  <header className="App-header">
      <div className="App-title"><button className={"button-reset button-add"} onClick={event => {this.setState({showForm: !this.state.showForm})} } >+</button><span>Event Planner <span className={"header-name"}>...by Duncan Lawson </span> </span></div> 
      <div className={"form-wrapper"}>
        <CSSTransition in={showForm} timeout={300} classNames="showForm"  unmountOnExit onExited={() => { this.setState({ showForm: false  });  }}  >
        <form className={"hide-wrapper app-max form-content"} onSubmit={this.onSubmit}>
          <div className={"post-form"}>
            <span>
            <textarea className={"form-text"} placeholder="Event:"
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
            </span>
            <span>
            <textarea className={"form-text"} placeholder="Details"
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
            </span>
            <div>
             <button className={"button-reset button-submit"} type="submit">Post ↵</button>
             </div>
          </div>
        </form>
        </CSSTransition>
        </div>
        </header>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);
