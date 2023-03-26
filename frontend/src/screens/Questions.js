import React, { useEffect, useState } from 'react'
import axios from 'axios';
import moment from 'moment';
import { CiCircleChevRight } from "react-icons/ci";
import Loader from '../components/Loader';

const Questions = ({ match }) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [completeData, setCompleteData] = useState([])
    const [userOption, setuserOption] = useState()
    const [result, setResult] = useState()

    const userInfo = JSON.parse(localStorage.getItem('userInfo'))

    useEffect(() => {

        axios.post('http://localhost/api/question/getQuestions', { testId: match.params.id, userId: userInfo._id })
            .then(response => {
                setLoading(false)
                setCompleteData(response.data.data[0])
                setData(response.data.data[0].questionsList)
            })

            .catch(error => console.log(error));
    }, []);


    console.log(userOption);

    const saveCurrentQuestion = (userOption, questionIndex, questionId) => {
        const questionSection = document.getElementById(questionId)

        console.log(userOption, questionIndex);
        // setNewData(data)
        data[questionIndex]['userAnswer'] = userOption
        alert('Answer Save Successfully!')
        questionSection.classList.add('hidden')
    }

    const finalSubmit = () => {
        setLoading(true)
        axios.post('http://localhost/api/question/submitAnswerAndCheckResult', { testId: match.params.id, userId: userInfo._id, questionsList: data })
            .then(response => {
                setLoading(false)
                setResult(response.data.data)
            })
    }

    return (
        <div className='row'>
            <main>
                {
                    completeData.testComplete ? <>
                        <h2>Test Result is Ready</h2>
                        <div className='resultSection'>
                            <h2>Result Status: {completeData.marksObtain * 2 >= 30 ? 'Pass' : 'Fail'}</h2>
                            <div className='border'></div>
                            <h2>Marks Obtain: {completeData.marksObtain * 2}</h2>
                            <div className='border'></div>
                            <h2>Total Marks: 40</h2>
                        </div>
                    </> : <>
                        {result ? <>
                            <p>You are : {result.status}</p>
                        </> : (<>
                            <div className='testHeader'>
                                <div className='testHead'>
                                    <h2 className='test1'>HTML, CSS and CSS with Float</h2>
                                    <div className='marks'>
                                        <span className='test1'>Total Marks: 40</span>
                                        <span className='test1'>Passing Marks: 30</span>
                                    </div>
                                </div>
                            </div>

                            {data.map((a, i) => (
                                <div className='question-text' id={a._id} key={a._id}>
                                    <div className='questionText'>
                                        <span className='questionName'>Q.{i + 1} {a.questionName}</span>
                                    </div>
                                    <div className='options'>
                                        <div className='option-Div'>
                                            <input onClick={() => setuserOption(a.optionA)} type='radio' name={`radio-${i}`} value={a.optionA} />
                                            <p className='questionOptions'>{a.optionA}</p>
                                        </div>

                                        <div className='option-Div'>
                                            <input onClick={() => setuserOption(a.optionB)} type='radio' name={`radio-${i}`} value={a.optionB} />
                                            <p className='questionOptions'>{a.optionB}</p>
                                        </div>
                                        <div className='option-Div'>
                                            <input onClick={() => setuserOption(a.optionC)} type='radio' name={`radio-${i}`} value={a.optionC} />
                                            <p className='questionOptions'>{a.optionC}</p>
                                        </div>
                                        <div className='option-Div'>
                                            <input onClick={() => setuserOption(a.optionD)} type='radio' name={`radio-${i}`} value={a.optionD} />
                                            <p className='questionOptions'>{a.optionD}</p>
                                        </div>
                                    </div>
                                    <button className='saveBtn' onClick={() => saveCurrentQuestion(userOption, i, a._id)}>Save</button>
                                </div>
                            ))}
                            <div className='submit'>
                                <button className='btn btn-submit' onClick={finalSubmit}>SUBMIT</button>
                            </div></>)}
                    </>
                }


            </main>
        </div>
    )
}

export default Questions