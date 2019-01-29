import React from 'react';

class UserIcon extends React.Component {

    render() {
        const currentUser = this.props.currentUser.username ? this.props.currentUser.username.slice(0, 1).toUpperCase() : "";
        return(
            <div className={this.props.type}>  
                {currentUser}
            </div>
        )
    }
}

export default UserIcon; 