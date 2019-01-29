import React from 'react';

class VideoPlayer extends React.Component {
    
    render () {
        return (
            <>
                <div className="video-player-content">
                    <video 
                    controls 
                    height="720"
                    width="1280"
                    src={this.props.src}
                    >
                    </video>
                </div>
            </>
        )
    }
}

export default VideoPlayer;