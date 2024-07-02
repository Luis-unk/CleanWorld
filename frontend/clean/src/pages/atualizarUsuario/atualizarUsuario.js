import React, { useState, useEffect } from "react";
import axios, { formToJSON } from "axios";
import { useForm, SubmitHandler } from "react-hook-form"
import { navBar } from "../../components/nav-bar/navBar";
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


      <div className="box-form">
      <h1 className="att">ATUALIZAR USUARIO</h1>

          <label for="selectUsuarios">Escolha o usuario:</label>
          <select name="usuarios" id="selectUsuarios" required value={selectedValue} onChange={handleChange}>
          {(usuarios || []).map((usuario) => {
          return <option>{"Id: " + usuario.id} | {"Nome: " +usuario.nome} </option>;
        })}
          </select>

          <form onSubmit={handleSubmit(attPut)}>
              
              <p><label for="nome">Nome: </label>
              <input type="text" name="nome" id="nome"{...register("nome", { required: true })}/>
              </p>
              
              
              <p><label for="cpf">CPF:</label>
              <input type="text" name="cpf" id="cpf" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"{...register("cpf",{ required: true })}/>
              </p>
              
              <p>
              <label>Endereço: </label>
              <input type="text" name="endereco" id="endereco"{...register("endereco", { required: true })}/>
              </p>
             

             <p>
              <label>Telefone: </label>
              <input type="tel" name="telefone" id="telefone"{...register("telefone", { required: true })}/>
              </p>
            

              <p>
              <label>Email: </label>
              <input type="email" name="email" id="email"{...register("email", { required: true })}/>
              </p>
              

              <p>
              <label>Senha: </label>
              <input type="text" name="senhaUsuario" id="senhaUsuario"{...register("senhaUsuario",{ required: true })}/>
              </p>
             
              

              <p>
              <label>Tipo Cadastro: </label>
              <input type="text" name="tipoCadastro" id="tipoCadastro"{...register("tipoCadastro", { required: true })}/>
              </p>
              
              
              <button type="submit" id="enviar">Editar</button>  
          </form>

     
      </div>
    </div>
    );
}
