import React, { useState, useEffect } from 'react'
import StudentButtons from '../components/StudentButtons'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions'

const AddStudent = ({ location, history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [batchCode, setBatchCode] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {

    }, [history])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(register(name, email, password, number, batchCode))
    }
    return (
        <section class="admin-student">
            <StudentButtons />
            <div class="admin-download-section">
                <div class="admin-card">
                    <form className='register-form' onSubmit={submitHandler}>
                        <input className='inputForm' type="text" placeholder='Enter Name' value={name}
                            onChange={(e) => setName(e.target.value)} />
                        <input className='inputForm' type="text" placeholder='Enter Email' value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <input className='inputForm' type="text" placeholder='Enter Number' value={number}
                            onChange={(e) => setNumber(e.target.value)} />
                        <input className='inputForm' type="text" placeholder='Enter Password' value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <input className='inputForm' type="text" placeholder='Enter Batch Code' value={batchCode}
                            onChange={(e) => setBatchCode(e.target.value)} />
                        <button>SAVE</button>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default AddStudent