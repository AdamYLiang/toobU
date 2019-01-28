import React from 'react';

class VideoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.video;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.readVideo = this.readVideo.bind(this);
        this.readThumb = this.readThumb.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        if(this.state.file && this.state.thumbnail){
            formData.append('video[file]', this.state.file);
            formData.append('video[thumbnail', this.state.thumbnail);
        }
        this.props.submitForm(formData);
    }

    readVideo(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () => this.setState({ url: reader.result, file: file });

        if(file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ url: "", file: null, title: "" });
        }
    }

    readThumb(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () => this.setState({ url: reader.result, thumbnail: file });

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ url: "", thumb: null, title: "" });
        }
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    render() {
        return (
            <>
                <h1>UPLOAD VIDEOS HERE</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="file"
                    accept="video/*"
                    onChange={(e) => this.readVideo(e)}
                    onClick={(e) => event.target.value = null}
                    />

                    <input 
                    type="file"
                    accept="image/*"
                    onChange={(e) => this.readThumb(e)}
                    onClick={(e) => event.target.value = null}
                    />

                    <input 
                    type="text"
                    value={this.state.title}
                    onChange={this.update('title')}
                    placeholder="Title"/>

                    <input 
                    type="text"
                    value={this.state.description}
                    onChange={this.update('description')}
                    placeholder="Description"/>
                    
                    <button type="submit">Upload</button>
                </form>
            </>
        )
    }
}

export default VideoForm; 