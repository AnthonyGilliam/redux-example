import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Provider store={ store }>
                <div className="App">
                    <PostForm />
                    <hr />
                    <Posts />
                </div>
            </Provider>
        );
    }
}

export default App;
