import { connect } from 'react-redux';
import Nav from './nav';

const mapStateToProps = ({ session, entities: { users }}) => {
    const sessionUser = session.currentUser || {};
    return {
        currentUser: users[sessionUser .id]
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);