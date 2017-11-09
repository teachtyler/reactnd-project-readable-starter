import React, { Component } from 'react';
import { PostCard } from './PostCard';
import { Post } from './Post'
export class Posts extends Component {

    shouldComponentUpdate(nextProps){
        return (this.props.posts !== nextProps.posts)
    }

    render() {
        let content;
        const curPath = window.location.pathname;
        const { posts } = this.props

        if (posts !== undefined && posts.length > 1) {
            if (curPath.slice(1, 5) === 'post') {
                let foundPost = this.props.posts.find(post => (
                    post.id === curPath.slice(6, curPath.length)
                ))
                content = <Post key={foundPost.id} post={foundPost} />
                console.log(foundPost)
            } else {
                content = this.props.posts.map(post => (
                    <PostCard
                        key={post.id}
                        post={post}
                    />
                ))
            }
        }
        console.log('Posts', posts)
        return (
            <div>
                {content}
            </div>
        )
    }
}
