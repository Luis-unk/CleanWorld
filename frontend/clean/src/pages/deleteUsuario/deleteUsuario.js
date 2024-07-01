import React, { useState, useEffect } from "react";
import axios, { formToJSON } from "axios";
import { useForm, SubmitHandler } from "react-hook-form"
import { useParams } from "react-router-dom";
import "./deleteUsuario.css";

export function DeleteUsuario(){

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

    const apagarUsuario = () => {
      axios.delete(`http://localhost:3006/api/usuario/${id}`)
      .then(()=> {
        alert("Usuario Apagado!");
      })
      .catch(()=>{
        alert("Erro ao apagar Usuario!");
      })
    }
    

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
      </div>


      <div className="box-form">
        <div className="formulario" id="formulario">
        <h1 className="att">Apagar Usuario</h1>

          <label for="usuarios" >Escolha o usuario:</label>
          <select name="usuarios" id="selectUsuarios" required value={selectedValue} onChange={handleChange}>
          {(usuarios || []).map((usuario) => {
          return <option>{"Id: " + usuario.id} | {"Nome: " +usuario.nome} </option>;
        })}
          </select>

          <button id="apagarUsuario" onClick={apagarUsuario}>Apagar</button>

        
        </div>
      </div>
    </div>
    );
}
