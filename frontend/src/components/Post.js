import React, { Component } from 'react';
import { ReadableAPI } from './ReadableAPI'
import { Comments } from './Comments'

export class Post extends Component {

    state = {
        comments: []
    }

    shouldComponentUpdate(nextProps) {
        return this.props.post !== nextProps.post ||
            this.state.comments.length === 0
    }

    render() {

        const postStyle = {
            margin: '15px',
            padding: '10px',
            border: '1px solid black'
        }

        const commentStyle = {
            margin: '5px',
            padding: '5px',
            border: '1px solid black',
            textAlign: 'left',
            "backgroundColor": "#ccc"
        }

        const commentButtonsStyle = {
            'paddingRight': '5px'
        }

        const { post } = this.props

        ReadableAPI.getCommentsForPost(post.id).then(comments => {
            this.setState({ comments })
            console.log(comments)
        })

        let parentComments = this.state.comments.filter(comment =>
            comment.parentId === post.id)

        return (
            <div>
                <div className="row" style={postStyle}>
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
                            <div className="col-md-12" style={commentStyle}>
                                <p>{post.body}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    {parentComments.map(comment => (
                        <div className="row col-md-10" style={commentStyle} key={comment.id}>
                            <div className="col-sm-1">
                                <div>
                                    <i className="fa fa-caret-up" aria-hidden="true"></i>
                                </div>
                                {comment.voteScore}
                                <div>
                                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="col-md-9" style={{ "marginRight": "5px", "backgroundColor": "#ddd" }}>
                                <p>{comment.body}</p>
                            </div>
                            <div className="row col-sm-12">
                                <a style={commentButtonsStyle} href=""> reply </a>
                                <a style={commentButtonsStyle} href=""> link </a>
                                <a style={commentButtonsStyle} href=""> save </a>
                            </div>
                            <Comments
                                comments={this.state.comments.filter(childComment => (
                                    childComment.parentId === comment.id
                                ))}
                            />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
