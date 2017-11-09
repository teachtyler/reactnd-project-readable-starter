import React, { Component } from 'react'

export class Comments extends Component {


    render() {

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

        const { comments } = this.props

        return (
            <div>
                {comments.map(comment => (
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
                    </div>
                ))
                }
            </div>
        )
    }
}