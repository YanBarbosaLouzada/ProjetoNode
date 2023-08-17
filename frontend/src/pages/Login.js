import React, { useState } from 'react'
import "../styles/login.css"
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const irparahome=()=>navigate('/')
    const [formData, setFormData] = useState({
        nome: '',
        idade: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        Axios.post("http://localhost:4000/login", formData)
            .then((response) => {
                alert(response.data.msg)
                irparahome()
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <div>
            <div class="wrapper">
                <div class="card-switch">
                    <label class="switch">
                        <input type="checkbox" class="toggle"></input>
                        <span class="slider"></span>
                        <span class="card-side"></span>
                        <div class="flip-card__inner">
                            <div class="flip-card__front">
                                <div class="title">Log in</div>
                                <form class="flip-card__form" action="" onSubmit={handleSubmit}>
                                    <input class="flip-card__input" name="nome"placeholder="Nome" value={formData.nome} onChange={handleChange}></input>
                                    <input class="flip-card__input" name="idade" placeholder="Idade" value={formData.idade} onChange={handleChange}></input>
                                    <button class="flip-card__btn" type='submit'>Let`s go!</button>
                                </form>
                            </div>
                            <div class="flip-card__back">
                                <div class="title">Sign up</div>
                                <form class="flip-card__form" action="">
                                    <input class="flip-card__input" placeholder="Nome" type="name"></input>
                                    <input class="flip-card__input" name="email" placeholder="Idade" type="number"></input>
                                    <input class="flip-card__input" name="password" placeholder="Sexo" type="name"></input>
                                    <button class="flip-card__btn">Confirm!</button>
                                </form>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Login