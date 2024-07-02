import React, { useState, useEffect } from "react";
import axios from "axios";

export function navBar() {
    return (
        <nav>
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
        
        </nav>
        

    );
}