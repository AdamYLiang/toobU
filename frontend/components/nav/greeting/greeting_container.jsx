import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import Greeting from './greeting';


const mapStateToProps = ({ session, entities: { users, channels } }) => {
    //Set the session to null if it doesnt exist, otherwise will find ID 
    const sessionUser = session.currentUser || {};
    debugger
    return {
        currentUser: users[sessionUser.id],
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);