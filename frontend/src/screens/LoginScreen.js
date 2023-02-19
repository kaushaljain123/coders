import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";

const LoginScreen = ({ location, history }) => {
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [batchCode, SetBatchCode] = useState("");
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            document.location.href = '/'
        }
    }, [history, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();
        dispatch(login(email, password, batchCode));
    };

    return (
        <>
            {error && error.message}
            {loading ? 'loading...' : (
                <>
                    <div className="background">
                        <div className="shape"></div>
                        <div className="shape"></div>
                    </div>
                    <form className="login-form" onSubmit={submitHandler}>
                        <h3>Bringonn.Coders</h3>

                        <label for="username">Username</label>
                        <input type="email" placeholder="Email" value={email}
                            onChange={(e) => SetEmail(e.target.value)} />

                        <label for="username">Batch code</label>
                        <input type="text" placeholder="Enter batch code" value={batchCode}
                            onChange={(e) => SetBatchCode(e.target.value)} />

                        <label for="password">Password</label>
                        <input type="password" placeholder="Password" value={password}
                            onChange={(e) => SetPassword(e.target.value)} />

                        <button>Log In</button>
                    </form>
                </>
            )}

        </>
    )
}

export default LoginScreen