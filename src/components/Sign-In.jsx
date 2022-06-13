import React from 'react';
import "../styles/App.css"
import {Link} from "react-router-dom";
const SignIn = () => {
    return (
            <main className="sign-in-page">
                <h1 className="visually-hidden">Travel App</h1>
                <form className="sign-in-form" autoComplete="off">
                    <h2 className="sign-in-form__title">Sign In</h2>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Email</span>
                        <input name="email" type="email" required />
                    </label>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Password</span>
                        <input name="password" type="password" autoComplete="new-password" minLength="3" maxLength="25" required />
                    </label>
                    <button className="button" type="submit">Sign In</button>
                </form>
                <span>
        Already have an account?
        <a  className="sign-in-form__link">
            <Link to="/sign-up">Sign Up</Link></a>
      </span>
            </main>
    );
};

export default SignIn;