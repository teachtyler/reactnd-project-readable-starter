import React, { Component } from 'react';
import { ReadableAPI } from './ReadableAPI'

export class PostCard extends Component {

    state = {
        comments: []
    }

    shouldComponentUpdate(nextProps){
        return (this.props.post !== nextProps.post)
    }

    render() {

        const postStyle = {
            margin: '15px',
            padding: '10px',
            border: '1px solid black'
        }

        const { post } = this.props

        console.log('POSTCARD', post)

        ReadableAPI.getCommentsForPost(post.id).then(comments =>
            this.setState({ comments })
        )

        return (
            <div className="row col-md-5" style={postStyle}>
                <div className="col-sm-1">
                    <i className="fa fa-caret-up" aria-hidden="true"></i>
                    <div>
                        {post.voteScore}
                    </div>
                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                </div>

                <div className="col-md-10" >
                    <div className="col-md-12">
                        {post.title}
                        <div style={{ fontSize: '0.8em' }} >
                            <span>
                                by
                                <span style={{ fontSize: '1.2em' }}> {post.author} </span>
                                in
                                <span style={{ fontSize: '1.2em' }}> {post.category} </span>
                            </span>
                        </div>
                        <div>
                            <a href={`../post/${post.id}`}>
                                <span style={{ fontSize: '1em' }}>
                                    {this.state.comments.length} comments
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
