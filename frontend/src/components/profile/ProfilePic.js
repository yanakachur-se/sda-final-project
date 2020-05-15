import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FileApi from  '../../api/FileApi'


class ProfilePic extends Component {

    state = {
        selectedFile: null
    };

    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });
    };

    onFileUpload = () => {

        const formData = new FormData();

        formData.append(
            "file", this.state.selectedFile,
           // this.state.selectedFile.name
        );
        console.log(this.state.selectedFile);

        FileApi.uploadImage(formData);
    };

    onFileDownload = () => {
        FileApi.getImage();
    }

    fileData = () => {

        if (this.state.selectedFile) {

            return (
                <div>
                    <h5>File Details:</h5>
                    <p>File Name: {this.state.selectedFile.name}</p>
                    <p>File Type: {this.state.selectedFile.type}</p>
                    <p>
                        Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h6>Choose before Pressing the Upload button</h6>
                </div>
            );
        }
    };

    render() {

        return (

            <div>
                <h3>Upload picture</h3>
                <div>
                    <input type="file" onChange={this.onFileChange} />
                    <button onClick={this.onFileUpload}>Upload</button>
                </div>
                {this.fileData()}
                
                <hr></hr>

                <button onClick={this.onFileDownload}>
                        Download
                </button>
            </div>
        );
    }

}

export default ProfilePic;
