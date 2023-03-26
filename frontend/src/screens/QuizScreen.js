import React, { useEffect, useState } from 'react'
import axios from 'axios';
import moment from 'moment';
import { CiCircleChevRight } from "react-icons/ci";
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';

const QuizScreen = () => {
    const [testData, setTestData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [questions, setQuestions] = useState()

    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    useEffect(() => {
        axios.post('http://206.189.141.77/api/test/findTest', { batchCode: userInfo.batchCode })
            .then(response => {
                setLoading(false)
                setTestData(response.data.data)
            })

            .catch(error => console.log(error));
    }, []);


    // const addFullScreen = () => {
    //     const startBtn = document.querySelector('.startBtn')
    //     startBtn.requestFullscreen()
    // }

    return (
        <div className='row'>
            {loading ? <Loader /> : (
                <>
                    <h2 className='padding'>Test Lists</h2>
                    {testData.map(test => (
                        <div className='col-1-flex card-data' key="{test._id}">

                            <div className='card-body'>
                                <p>{test.testName}</p>
                                <p>{test.batchCode}</p>
                                <p>{moment(test.testTime).add(10, 'days').calendar()}</p>
                                <p className='startBtn'><Link to={`test/${test._id}`}>Start</Link></p>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}

export default QuizScreen