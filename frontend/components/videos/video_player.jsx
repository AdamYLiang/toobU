import React from 'react';

class VideoPlayer extends React.Component {
    
    render () {
        return (
            <>
                <div className="video-player-content">
                    <video 
                    className="video-player"
                    controls 
                    autoPlay
                    src={this.props.src}
                    >
                    </video>
                </div>
            </>
        )
    }
}

export default VideoPlayer;