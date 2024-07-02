import React, { useState, useEffect } from "react";
import axios, { formToJSON } from "axios";
import { useForm, SubmitHandler } from "react-hook-form"

import "./cadastro.css";

export function Cadastro() {

  const { register, handleSubmit } = useForm()

    const addPost = data => axios.post("http://localhost:3006/api/usuario", data) 
      .then(()=> {
        alert("Usuario Adicionado!");
      })
      .catch(()=>{
        alert("Erro ao adicionar Usuario!");
      })
       
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
      <h1 className="cdd">CADASTRAR USUARIO</h1>
      <div className="box-form">
      
        <div className="formulario">
          <form onSubmit={handleSubmit(addPost)}>

              
              <label >Nome: </label>
              <input type="text" name="nome" id="nome"{...register("nome")}/>
              <br/>
              

           
              <label>CPF:</label>
              <input type="text" name="cpf" id="cpf" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"{...register("cpf", { required: true })}/>
              <br/>
              
              
              
              <label>Endereço: </label>
              <input type="text" name="endereco" id="endereco"{...register("endereco", { required: true })}/>
              <br/>
             

             
              <label>Telefone: </label>
              <input type="tel" name="telefone" id="telefone"{...register("telefone", { required: true })}/>
              <br/>
            

            
              <label>Email: </label>
              <input type="email" name="email" id="email"{...register("email", { required: true })}/>
              <br/>
              

              
              <label>Senha: </label>
              <input type="text" name="senhaUsuario" id="senhaUsuario"{...register("senhaUsuario", { required: true})}/>
              <br/>
              

              
              <label>Tipo Cadastro: </label>
              <input type="text" name="tipoCadastro" id="tipoCadastro"{...register("tipoCadastro", { required: true })}/>
              <br/>
              
              
              <button type="submit" id="enviar">Cadastrar</button>

          </form>
        </div>
      </div>
    </div>
  );
}
