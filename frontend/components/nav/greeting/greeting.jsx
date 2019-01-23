import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props){
        super(props);
        this.state = { showDropdown: false };
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(e) {
        e.preventDefault();
        this.setState({showDropdown: true}, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
        this.setState({ showDropdown: false}, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }

    render() {
        const { currentUser, logout } = this.props;
        
        const loginGreeting = () => {
            let dropdown = <div className='nav-bar-dropdown'></div>;
            if (this.state.showDropdown){
                dropdown = (
                    <div className='nav-bar-dropdown'> 
                        <div className='nav-bar-title-box'>
                            <h2>{currentUser.username}</h2>
                            <p>{currentUser.email}</p>
                        </div>
                        <button> My Channel </button>
                        <button onClick={logout}>Sign Out</button>
                    </div>
                )
            }

            return (
                <section className='login-signup-nav'>
                    <button 
                    onClick={this.showMenu} 
                    className="username-button-text">
                        {currentUser.username}
                    </button>

                    {dropdown}
                </section>
            );
        };

        const sessionForms = () => (
            <section className='login-signup-nav'>
                <Link to='/login'>Login</Link>
            </section>
        );

        return currentUser ? loginGreeting() : sessionForms();
    }
}



export default Greeting;