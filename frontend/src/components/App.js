import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ReadableAPI } from './ReadableAPI'
import { Posts } from './Posts'
import { Post } from './Post'

class App extends React.Component {

  state = {
    posts: [],
    categories: [],
    comments: []
  }


  componentDidMount() {
    ReadableAPI.getAllPosts().then(posts => {
      this.setState({ posts });
    })

    ReadableAPI.getAllCategories().then(categories => {
      this.setState({ categories })
    })
  }

  render() {

    const { posts, comments } = this.state;
    const curPath = window.location.pathname;

    console.log('pre-render', posts)

    return (
      <div className="App">
        <div className="App-header">
          <ul>
            <a href="/"> <li>Home</li> </a>
          </ul>
        </div>
        <div className="App-sidenav">
        </div>

        <div className="main container col-md-10">
          <div>
            <Posts posts={posts} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;