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
        const typeHeader = (this.props.formType === 'login' ? 'Sign In' : 'Create Account');
        let emailInput;
        if (this.props.formType === 'signup') {
            emailInput = (
                <>
                    <label> Email:
                        <input type="text" value={this.state.email} onChange={this.update('email')} />
                    </label>
                </>
            );
        }
        return (
            <div className="login-signup-form">
                <h2>{typeHeader}</h2>

                {this.renderErrors()}
                <form onSubmit={this.handleSubmit}>
                    {emailInput}
                    <label> Username:
                        <input type="text" value={this.state.username} onChange={this.update('username')} />
                    </label>
                    <label> Password:
                        <input type="password" value={this.state.password} onChange={this.update('password')} />
                    </label>
                    <input type="submit" value={typeHeader} />
                </form>

                <h2>{this.props.otherLink}</h2>
            </div>
        )
    }
}

export default SessionForm;