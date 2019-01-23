import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.submitForm(this.state);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={i}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    render() {
        const typeHeader = (this.props.formType === 'login' ? 'Sign In' : 'Sign Up');
        let emailInput;
        if (this.props.formType === 'signup') {
            emailInput = (
                <>
                    <label>
                        <input 
                        type="text" 
                        value={this.state.email} 
                        onChange={this.update('email')}
                        placeholder="Email" />
                    </label>
                </>
            );
        }
        return (
            <div className="login-signup-form">
                <div className="login-signup-form-top">
                    <h2 className= "login-signup-h2">{typeHeader}</h2>
                    {this.renderErrors()}
                </div>

                <form onSubmit={this.handleSubmit}>
                    {emailInput}

                    <label>
                        <input 
                        type="text" 
                        value={this.state.username} 
                        onChange={this.update('username')}
                        placeholder="Username" />
                    </label>
                    <label>
                        <input 
                        type="password" 
                        value={this.state.password} 
                        onChange={this.update('password')}
                        placeholder="Password" />
                    </label>

                    <div className ="login-signup-form-bottom">
                        <h2>{this.props.otherLink}</h2>
                        <button onClick={this.handleSubmit}>{typeHeader}</button>
                    </div>
                </form>

            </div>
        )
    }
}

export default SessionForm;