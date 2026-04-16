import { auth } from './firebase';
import { useEffect, useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

import './signLogin.css'

export default function signUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Попытка регистрации с:", email);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                user = userCredential.user;
                if (user) {
                    navigate("/profile")

                }


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (error.code === 'auth/weak-password') {
                    alert('Пароль слишком слабый (нужно минимум 6 символов).');
                } else if (error.code === 'auth/email-already-in-use') {
                    alert('Эта почта уже занята.');
                } else if (error.code === 'auth/invalid-email') {
                    alert('Некорректный формат почты.');
                }
            });
    }



    return (
        <div>

            <section>
                <div>
                    <div>
                        <h1> Sign up</h1>
                        <form>
                            <div>
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <input type="email"
                                    label="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Email address" />

                            </div>

                            <div>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    label="Create password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="Password"
                                />
                            </div>

                            <button
                                type="submit"
                                onClick={onSubmit}
                            >
                                Sign up
                            </button>
                            <div className="flex-buttons" style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                                <button onClick={() => navigate("/")}>
                                    Back to app
                                </button>
                                <button onClick={() => navigate('/login')}>already have an account?</button>
                            </div>


                        </form>


                    </div>
                </div>
            </section>
        </div>


    );
}