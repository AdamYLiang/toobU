import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.comment;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.submitForm(this.state);
    }

    update(field) {
        return(e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    render() {
        return (
            <div className="comment-form-content">
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text"
                    value={this.state.body}
                    onChange={this.update('body')}
                    placeholder="Add a public comment..."/>

                    <button type="submit">COMMENT</button>
                </form>
            </div>
        )
    }
}

export default CommentForm; 