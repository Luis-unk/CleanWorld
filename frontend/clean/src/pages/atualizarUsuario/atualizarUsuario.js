import React, { useState, useEffect } from "react";
import axios, { formToJSON } from "axios";
import { useForm, SubmitHandler } from "react-hook-form"
import { useParams } from "react-router-dom";
import "./atualizarUsuario.css";

export function AtualizarUsuario(){

  const { register, handleSubmit } = useForm()

  const attPut =  (data) => axios.put("http://localhost:3006/api/usuario/" + data.id)
  .then(()=> {
    console.log("Usuario Atualizado.");
  })
  .catch(()=>{
    console.log("ERRORR");
  })

    return(
        <div className="box">

      <div className="titulo">
        <h1>CleanWorld</h1>
      </div>

      <h1>ATUALIZAR USUARIO</h1>

      <div className="box-form">
        <div className="formulario">
          <form onSubmit={handleSubmit(attPut)}>

              <label >Id: </label>
              <input type="text" name="idUsuario" id="idUsuario"{...register("id")}/>
              <br/>

              
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
              
              
              <button type="submit" id="enviar">Editar</button>  
          </form>

        </div>
      </div>
    </div>
    );
}
