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

        <a href="http://localhost:3000/cadastro">
  <h3>Cadastro</h3>
  </a>
  <a href="http://localhost:3000/atualizarUsuario">
  <h3>Editar </h3>
  </a>
  <a href="">
  <h3>Menu</h3>
</a>
      </div>
      
      <div className="box-form">
      <h1 className="cdd">CADASTRAR USUARIO</h1>
        <div className="formulario">
          <form onSubmit={handleSubmit(addPost)}>

              
              <label >Nome: </label>
              <input type="text" name="nome" id="nome"{...register("nome")}/>
              <br/>
              

           
              <label>CPF:</label>
              <input type="text" name="cpf" id="cpf"{...register("cpf")}/>
              <br/>
              
              
              
              <label>Endereço: </label>
              <input type="text" name="endereco" id="endereco"{...register("endereco")}/>
              <br/>
             

             
              <label>Telefone: </label>
              <input type="text" name="telefone" id="telefone"{...register("telefone")}/>
              <br/>
            

            
              <label>Email: </label>
              <input type="text" name="email" id="email"{...register("email")}/>
              <br/>
              

              
              <label>Senha: </label>
              <input type="text" name="senhaUsuario" id="senhaUsuario"{...register("senhaUsuario")}/>
              <br/>
              

              
              <label>Tipo Cadastro: </label>
              <input type="text" name="tipoCadastro" id="tipoCadastro"{...register("tipoCadastro")}/>
              <br/>
              
              
              <button type="submit" id="enviar">Cadastrar</button>  
          </form>

        </div>
      </div>
    </div>
  );
}
