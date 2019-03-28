import { connect } from 'react-redux';
import Nav from './nav';

const mapStateToProps = ({ session, entities: { users }}) => {
    const sessionUser = session.currentUser || {};
    return {
        currentUser: users[sessionUser.id]
    };
};

export default connect(mapStateToProps)(Nav);