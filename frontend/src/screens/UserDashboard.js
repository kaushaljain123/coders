import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fileList } from "../actions/fileAction";
import moment from 'moment';
import download from '../images/cloud.png'
import Loader from '../components/Loader';

const UserDashboard = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    useEffect(() => {
        axios.post('http://206.189.141.77/api/files', { batchCode: userInfo.batchCode })
            .then(response => {
                setLoading(false)
                setData(response.data.data)
            })

            .catch(error => console.log(error));
    }, []);

    return (
        <section className="download-section">
            {loading ? <Loader /> : (
                <>
                    {data.map(item => (
                        <div class="card">
                            <h1>
                                <span>{moment(item.createdAt).calendar()}</span>
                                <span class="language">{item.tags}</span>
                            </h1>

                            <div class="files">
                                <a href={"http://coders.bringonn.in" + item.files} class="download-link html" download>{item.folderName}<img src={download} width="15" height="15" /></a>
                            </div>
                        </div>
                    ))}
                </>
            )}

        </section>
    )
}

export default UserDashboard