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

    closeMenu(e) {
        if(this.props.currentUser && !this.dropdownMenu.contains(e.target)){
            this.setState({ showDropdown: false}, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }

    render() {
        const { currentUser, logout } = this.props;
        
        const loginGreeting = () => {
            let dropdown = <div className='nav-bar-dropdown'></div>;
            if (this.state.showDropdown){
                dropdown = (
                    <div 
                    className='nav-bar-dropdown'
                    ref={(element) => {
                        this.dropdownMenu = element;
                    }}> 
                        <div className='nav-bar-title-box'>
                            <h1 className='user-dropdown-icon'>{currentUser.username.slice(0, 1)}</h1>
                            <section className ='user-dropdown-details'>
                                <h1>{currentUser.username}</h1>
                                <h2>{currentUser.email}</h2>
                            </section>
                        </div>
                        <div className='nav-bar-buttons-box'>
                            <Link to={ currentUser.channels 
                                ? `/channel/${currentUser.channels.first}`
                                : `/user/${currentUser.id}`
                                }>
                                <button>
                                    <i className="far fa-user fa-lg"></i>
                                        <h3> My Channel </h3>
                                </button>
                            </Link>
                            <button onClick={logout}>
                                <i className="fas fa-sign-out-alt fa-lg"></i>
                                <h3>Sign Out</h3>
                            </button>
                        </div>
                    </div>
                )
            }
            return (
                <section className='login-signup-nav'>
                    <button 
                    onClick={this.showMenu} 
                    className="username-button">
                        {currentUser.username.slice(0, 1)}
                    </button>

                    {dropdown}
                </section>
            );
        };

        const sessionForms = () => (
            <section className='login-signup-nav'>
                <Link to='/login' className='nav-login-link'>SIGN IN</Link>
            </section>
        );

        return currentUser ? loginGreeting() : sessionForms();
    }
}



export default Greeting;