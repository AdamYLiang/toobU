import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import VideoForm from './video_form';
import { createVideo } from '../../actions/video_actions';

const mapStateToProps = state => {
    return {
        video: { title: '', description: '', url: '', file: '', thumbnail: '' },
        errors: state.errors.video,
        formType: 'create'
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const history = ownProps.history;
    return {
        submitForm: (video) => dispatch(createVideo(video, history)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoForm));