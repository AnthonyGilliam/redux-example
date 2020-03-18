import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from "../actions/postActions";

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
        }
    }

    onInputChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    };

    onFormSubmit = (evt) => {
        evt.preventDefault();
        let post = {
          title: this.state.title,
          body: this.state.body,
        };
        this.props.createPost(post);
    };

    render() {
        return (
            <div id='PostForm'>
                <h1>Add Post</h1>
                <form onSubmit={this.onFormSubmit}>
                    <label htmlFor='title'>Title</label>
                    <br />
                    <input name='title' value={this.state.title} onChange={this.onInputChange} />
                    <br />
                    <label htmlFor='body'>Body</label>
                    <br />
                    <textarea name='body' value={this.state.body} onChange={this.onInputChange} />
                    <br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default connect(null, { createPost })(PostForm);