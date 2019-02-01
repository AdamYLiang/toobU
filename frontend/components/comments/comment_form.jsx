import React from 'react';
import UserIcon from '../main/user_icon';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.comment;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loggedIn = this.loggedIn.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.submitForm({
            body: this.state.body,
            video_id: this.props.videoId
        });
        this.setState({body: ""});
    }

    update(field) {
        return(e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    loggedIn(){
        if(this.props.currentUser === null){
            this.props.history.push('/login');
        }
    }

    render() {
        const userIcon = this.props.currentUser === null ? "" : <UserIcon type="commenter-icon" currentUser={this.props.currentUser}/>
        return (
            <div className="comment-form-content" onClick={this.loggedIn}>
                <div>
                    {userIcon}
                </div>
                <form className="comment-submit-form" onSubmit={this.handleSubmit}>
                    <div className="comment-form-text-submit">
                        <input 
                        type="text"
                        value={this.state.body}
                        onChange={this.update('body')}
                        placeholder="Add a public comment..."/>
                    </div>
                    <div className="comment-form-submit-button">
                        <button type="submit">COMMENT</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CommentForm; 