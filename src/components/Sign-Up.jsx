import React, {useState} from 'react';
import {Link} from "react-router-dom";

const SignUp = (props) => {
    let [email, setEmail] = useState("");
    let [name, setName] = useState("");
    let [password, setPassword] = useState(``);
    const onChange = (event, setValue) => {
        setValue(event.target.value)
    }
    return (
            <main className="sign-up-page">
                <h1 className="visually-hidden">Travel App</h1>
                <form className="sign-up-form" autoComplete="off">
                    <h2 className="sign-up-form__title">Sign Up</h2>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Full name</span>
                        <input name="full-name" type="text" value={name} onChange={(event)=> {onChange(event, setName)}} required/>
                    </label>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Email</span>
                        <input name="email" value={email} type="email" onChange={(event)=> {onChange(event, setEmail)}} required/>
                    </label>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Password</span>
                        <input name="password" type="password" value={password} autoComplete="new-password" onChange={(event)=> {onChange(event, setPassword)}} required/>
                    </label>
                    <button className="button" type="submit">Sign Up</button>
                </form>
                <span>
        Already have an account?
        <a className="sign-up-form__link"><Link to="/sign-in">Sign In</Link></a>
      </span>
            </main>
    );
};

export default SignUp;