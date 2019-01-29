import React from 'react';

class VideoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.video;
        this.state.isUploadDisabled = false;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.readVideo = this.readVideo.bind(this);
        this.readThumb = this.readThumb.bind(this);
        this.enableSubmit = this.enableSubmit.bind(this);
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
        this.setState({ isUploadDisabled: true }); //SET IT SO WHEN UPLOADING ITS GG 
        this.props.submitForm(formData, this.enableSubmit);
    }

    enableSubmit() {
        this.setState({ isUploadDisabled: false });
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
        const uploadDetails = this.state.file ? 
            (<>
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
                    placeholder="Title" />

                <input
                    type="text"
                    value={this.state.description}
                    onChange={this.update('description')}
                    placeholder="Description" />

                <button type="submit" disabled={this.state.isUploadDisabled}>{this.state.isUploadDisabled ? "UPLOADING" : "UPLOAD"}</button>
            </>) : "";

        return (
            <>
                <div className="upload-form-content">
                    <form onSubmit={this.handleSubmit} className="upload-form">
                        <div className="video-upload-container">
                            <label htmlFor="video-upload-field">
                                <input 
                                id="video-upload-field"
                                type="file"
                                accept="video/*"
                                onChange={(e) => this.readVideo(e)}
                                onClick={(e) => event.target.value = null}
                                />
                            </label>
                        </div>

                        {uploadDetails}
                    </form>
                </div>
            </>
        )
    }
}

export default VideoForm; 