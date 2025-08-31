import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn(props) {

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const disabled = !!(props.userNameError) || !!(passwordError);
    const gotRequiredInfo = !!props.userName && !!password;

    const clearForm = () => {
        props.setUserName("");
        setPassword("");
    };

    const setSubmissionErrors = () => {
        if (props.userName === "") {
            props.setUserNameError("All fields are required.");
        };
        if (password === "") {
            setPasswordError("All fields are required.");
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!gotRequiredInfo) {
            setSubmissionErrors();
            return
        } else {
            props.submitForm({
                "user-name":props.userName,
                "password":password,
            });
            props.setLoggedIn({userName:props.userName, state:true})
            clearForm();
        };
    };

    const handleUserNameChange = (e) => {
        props.setUserName(e.target.value);
        if (e.target.value.length < 2) {
            props.setUserNameError("Username must have at least 2 characters.");
            return;
        } else if (e.target.value.length >15) {
            props.setUserNameError("Please limit the Username to 15 characters long.");
        } else {
            props.setUserNameError("");
        };
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("Password must have at least 8 characters.");
            return;
        } else if (e.target.value.length >15) {
            setPasswordError("Please limit the password to 15 characters long.");
        } else {
            setPasswordError("");
        };
    };

    return (
        <section className="sign-in">
            <form
            onSubmit={handleSubmit}
            className="form"
            >

            <h2>Sign In</h2>
                <label htmlFor="username">Username: </label>
                <input
                name="username"
                id="username"
                value={props.userName}
                type="text"
                placeholder="Username"
                onChange= {handleUserNameChange}
                />
                {props.userNameError?<p className="error-message">{props.userNameError}</p>:null}

                <label htmlFor="password">Password: </label>

                <input
                name="password"
                id="password"
                value={password}
                type="password"
                onChange= {handlePasswordChange}
                />
                {passwordError?<p className="error-message">{passwordError}</p>:null}

                <div className="sign-up-or-in">
                    <input
                    disabled={disabled}
                    style={disabled?{border: "1px solid #999999", backgroundColor: "#cccccc", color: "#666666", cursor: "not-allowed"}:null}
                    aria-label="On Click"
                    className="button"
                    type="submit"
                    value="Sign In"
                    />

                    <p style={{textDecoration: "underline", padding: "10px 0"}}>or</p>
                    <p>If You're Not Already A Member</p>

                    <Link aria-label="On Click" className="button" to="/sign_up">Sign Up</Link>

                    <p>for exclusive benefits!</p>
                </div>
            </form>
        </section>
    );
};