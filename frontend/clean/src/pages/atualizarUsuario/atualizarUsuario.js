import React, { useState, useEffect } from "react";
import axios, { formToJSON } from "axios";
import { useForm, SubmitHandler } from "react-hook-form"
import { useParams } from "react-router-dom";
import "./atualizarUsuario.css";

export function AtualizarUsuario(){

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get("http://localhost:3006/api/usuario");

        setUsuarios(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsuarios();
  }, []);


  const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };


    var id = Number(selectedValue.substring(4, 6))

    if (id > 10) {
      id = Number(selectedValue.substring(4, 7))
    }
  const { register, handleSubmit } = useForm()

  const attPut =  (data) => axios.put(`http://localhost:3006/api/usuario/${id}`, data)
  .then(()=> {
    alert("Usuario Atualizado");
  })
  .catch(()=>{
    alert("Erro ao editar usuario!");
  })

    return(
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
      <h1 className="att">ATUALIZAR USUARIO</h1>
        <div className="formulario">

          <label for="usuarios">Escolha o usuario:</label>
          <select name="usuarios" id="selectUsuarios" required value={selectedValue} onChange={handleChange}>
          {(usuarios || []).map((usuario) => {
          return <option>{"Id: " + usuario.id} | {"Nome: " +usuario.nome} </option>;
        })}
          </select>

          <form onSubmit={handleSubmit(attPut)}>
              
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
