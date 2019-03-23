import React from 'react';
import VideoListItem from '../videos/video_list_item';

class SearchResults extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchVideos({
            search: this.props.search,
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.search !== this.props.location.search){
            this.props.fetchVideos({
                search: this.props.location.search.slice(14)
            });
        }
    }

    render(){
        const { videos } = this.props;
        const videoList = videos.length > 0 ? 
                        videos.map((video, idx) => {
                            return (
                                <li key={idx}>
                                    <img src={video.thumbURL} />
                                    <h1>{video.title}</h1>
                                </li>
                            )
                        }) : "";
        return(
            <ul>
                {videoList}
            </ul>
        );
    }
}

export default SearchResults;