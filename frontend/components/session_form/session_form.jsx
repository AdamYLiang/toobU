import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLoginHelper = this.demoLoginHelper.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.submitForm(this.state);
    }

    demoLogin(e) {
        e.preventDefault();
        const username = 'TestUser'.split('');
        const password = '111111'.split('');
        const submit = document.getElementById('session-submit');
        this.setState({ username: '', password: '' }, () => {
            this.demoLoginHelper(username, password, submit);
        });
    }

    demoLoginHelper(username, password, submit) {
        if (username.length > 0) {
            this.setState(
                { username: this.state.username + username.shift() }, () => {
                    window.setTimeout(() =>
                        this.demoLoginHelper(username, password, submit), 50);
                }
            );
        } 
        else if (password.length > 0) {
            this.setState(
                { password: this.state.password + password.shift() }, () => {
                    window.setTimeout(() =>
                        this.demoLoginHelper(username, password, submit), 50);
                }
            );
        } else {
            submit.click();
        }
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
        document.body.style.overflow = "hidden";
    }

    componentWillUnmount(){
        document.body.style.overflow = "visible";
    }

    render() {
        const typeHeader = (this.props.formType === 'login') ? 'Sign In' : 'Sign Up';
        const demoButton = (this.props.formType === 'login') 
            ? <div className="demo-user">
                <h2>Want a quick demo?</h2>
                <button 
                    onClick={this.demoLogin} 
                    className="demo-btn"> Demo account
                </button>
              </div>
            : ""
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

                    {demoButton}

                    <div className ="login-signup-form-bottom">
                        <h2>{this.props.otherLink}</h2>
                        <button type="submit" id="session-submit">{typeHeader}</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SessionForm;