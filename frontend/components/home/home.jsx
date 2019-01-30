import React from 'react';
import { Link } from 'react-router-dom';
import NavContainer from '../nav/nav_container';
import VideoIndexContainer from '../videos/video_index_container';

class Home extends React.Component {

    componentDidMount(){
    }

    componentDidUpdate(){
    }

    render() {
        return (
            <div id="homepage-content">
                <VideoIndexContainer />
            </div>
        )
    }
}



export default Home;