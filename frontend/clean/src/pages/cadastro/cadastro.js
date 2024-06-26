import React, { useState, useEffect } from "react";
import axios, { formToJSON } from "axios";
import { useForm, SubmitHandler } from "react-hook-form"
import "./cadastro.css";

export function Cadastro() {

  const { register, handleSubmit } = useForm()

    const addPost = data => axios.post("http://localhost:3006/api/usuario", data) 
      .then(()=> {
        console.log("Usuario adicionado");
      })
      .catch(()=>{
        console.log("ERRORR");
      })
       
  return (
    
    <div className="box">

      <div className="titulo">
        <h1>CleanWorld</h1>
      </div>
      
      <div className="box-form">
        <div className="formulario">
          <form onSubmit={handleSubmit(addPost)}>
              <label>Nome: </label>
              <input type="text" name="nome" id="nome"{...register("nome")}/>

              <label>CPF:</label>
              <input type="text" name="cpf" id="cpf"{...register("cpf")}/>
              
              
              <label>Endereço: </label>
              <input type="text" name="endereco" id="endereco"{...register("endereco")}/>

              <label>Telefone: </label>
              <input type="text" name="telefone" id="telefone"{...register("telefone")}/>

              <label>Email: </label>
              <input type="text" name="email" id="email"{...register("email")}/>

              <label>Senha: </label>
              <input type="text" name="senhaUsuario" id="senhaUsuario"{...register("senhaUsuario")}/>

              <label>Tipo Cadastro: </label>
              <input type="text" name="tipoCadastro" id="tipoCadastro"{...register("tipoCadastro")}/>

              <button type="submit">Enviar</button>  
          </form>

        </div>
      </div>
    </div>
  );
}
