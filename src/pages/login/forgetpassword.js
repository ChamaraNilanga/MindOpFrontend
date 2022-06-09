import React from 'react'
import { Link } from 'react-router-dom'
import "../login/login.css"

const  ForgetPasswordPage =()=> {
    return (
        <div className="text-center m-5-auto">
            <form action="/login">
            <h2>Forgot Password</h2>
            <h5>To reset your password, submit your username or your email address below. If we can find you in the database, an email will be sent to your email address, with instructions how to get access again.</h5>
            
                <p>
                    <label id="reset_pass_lbl">Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Send password reset email</button>
                </p>
                <p><Link to="/">Back to Login</Link>.</p>
            </form>
        </div>
    )
}


export default ForgetPasswordPage
