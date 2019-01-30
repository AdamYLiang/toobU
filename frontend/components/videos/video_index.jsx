import React from 'react';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {

    componentDidMount() {
        this.props.fetchVideos();
    }

    render() {
        debugger
        return(
            <>
                <h1>Amazing!</h1>
            </>
        )
    }
}

export default VideoIndex;