import React, { useState, useEffect } from "react";
import axios, { formToJSON } from "axios";
import { useForm, SubmitHandler } from "react-hook-form"

import "./login.css"

export function Login() {
    return (
        <div className="box">
        <div className="titulo">
            <h1>CleanWorld</h1>

            <a href="http://localhost:3000/cadastro">
            <h3>Cadastrar</h3>
            </a>
            <a href="http://localhost:3000/atualizarUsuario">
            <h3>Editar </h3>
            </a>
            <a href="http://localhost:3000/deleteUsuario">
            <h3>Apagar</h3>
            </a>
            <a href="http://localhost:3000/login">
            <h3>Login</h3>
            </a>
        </div>

      <div className="subBox">

            <div className="box-login">

                <div className="login">

                    <h1>LOGIN</h1>

                </div>

                <div className="formLogin">

                    <form>
                        <p>
                        <label for="email">Email:</label>
                        <input type="email" name="email" id="email" ></input>
                        </p>

                        <p>
                        <label for="senha">Senha:</label>
                        <input type="text" name="senha" id="senha" ></input>
                        </p>

                        <button type="submit" id="login">Login</button>

                    </form>
                </div>

                <div className="variaveis">

                    <a href="http://localhost:3000/cadastro">Cadastre-se</a>
                    <a href="">Esqueceu a senha?</a>

                </div>

                

            </div>

        </div>

      </div>
    
    

    );
}