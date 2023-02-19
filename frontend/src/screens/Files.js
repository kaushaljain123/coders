import React, { useState } from 'react'
import axios from 'axios'
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { fileUpload } from '../actions/fileAction';

const Files = () => {

    const [batchCode, setBatchCode] = useState('')
    const [tags, setTags] = useState('')
    const [files, setFiles] = useState('')
    const [folderName, setFolderName] = useState('')

    const dispatch = useDispatch();

    const uploadFolderHandler = async (e) => {
        const formData = new FormData();
        _.forEach(e.target.files, (file) => {
            formData.append("files", file);
        });
        try {
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            };
            const { data } = await axios.post(
                "http://206.189.141.77/api/upload",
                formData,
                config
            );

            setFiles(data);
        } catch (error) {
            console.error(error);
        }
    };


    const folderUploadHandler = async (e) => {
        e.preventDefault()
        dispatch(fileUpload(batchCode, tags, files, folderName));

    }

    return (
        <section className="file-upload-section">
            <h3>Folder upload</h3>
            <div class="admin-card">
                <form onSubmit={folderUploadHandler}>
                    <input type="text" placeholder='Enter Batch Code' value={batchCode}
                        onChange={(e) => setBatchCode(e.target.value)} />
                    <input type="text" placeholder='Enter Tags' value={tags}
                        onChange={(e) => setTags(e.target.value)} />
                    <input type="text" placeholder='Enter Folder Name' value={folderName}
                        onChange={(e) => setFolderName(e.target.value)} />
                    <input type="file" onChange={uploadFolderHandler} />
                    <button>Upload</button>
                </form>
            </div>
        </section>
    )
}

export default Files