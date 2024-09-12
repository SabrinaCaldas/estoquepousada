import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import myIcon from './assets/my-icon.svg'
import { card } from "react-bootstrap";
import cadastrodeproduto  from './assets/cadastrodeproduto.svg';





function Signup() {
  return (
    <div className="container">
  

    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
 <div class="container-fluid">
 <img src={myIcon} alt="kjkj" width="30" height="24" class="d-inline-block align-text-top"/>
   <a class="navbar-brand" href="fdfd">MENU</a>
    
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
      <span class="navbar-toggler-icon"></span>
   </button>
  <div class="collapse navbar-collapse" id="main_nav">
	<ul class="navbar-nav ms-auto">
	<li class="nav-item"><a class="nav-link" href="#"> Produtos </a></li>
	<li class="nav-item"><a class="nav-link" href="#"> Estoque </a></li>
	<li class="nav-item"><a class="nav-link" href="#"> Cadastro de Produto </a></li>
  <li class="nav-item"><a class="nav-link" href="#"> Csddsdsd </a></li>
	</ul>
  </div>
 </div> 
</nav>

















    <div className="Signup template d-flex justify-content-center align-items-center vh-100 bg-primary">
    
      








      <div className="card m-5 vh-3 bg- primary p-1" >
  <img src={cadastrodeproduto} class="card-img-top" width="80" height="50" alt="..."/>
  <div className="card-subtitle mb-2 text-muted">
    <h5 className="card-title">Entrada de Produto</h5>
    <p className="card-text">inserir quantidades de produtos cadastrados. </p> 
    <a href="sasdsd" class="btn btn-primary">Cadastrar</a>
  </div>
</div>


<div className="card m-5 vh-3 bg- primary p-1" >
  <img src={cadastrodeproduto} class="card-img-top" width="80" height="50" alt="..."/>
  <div className="card-subtitle mb-2 text-muted">
    <h5 className="card-title">Saída de Produto</h5>
    <p className="card-text">insira quantidade de produtos vendidos. 
      .</p>
    <a href="sasdsd" class="btn btn-primary">Adicionar</a>
  </div>
</div>

<div className="card m-5 vh-3 bg- primary p-1" >
  <img src={cadastrodeproduto} class="card-img-top" width="80" height="50" alt="..."/>
  <div className="card-subtitle mb-2 text-muted">
    <h5 className="card-title">Novo Produto</h5>
    <p className="card-text">cadastre um novo produto
      .</p>
    <a href="sasdsd" class="btn btn-primary">Cadastrar</a>
  </div>
</div>

<div className="card m-5 vh-3 bg- primary p-1" >
  <img src={cadastrodeproduto} class="card-img-top" width="80" height="50" alt="..."/>
  <div className="card-subtitle mb-2 text-muted">
    <h5 className="card-title">Controle de Estoque</h5>
    <p className="card-text">controle seu abastecimento
      .</p>
    <a href="sasdsd" class="btn btn-primary">Verificar</a>
  </div>
</div>

<div className="card m-5 vh-3 bg- primary p-1" >
  <img src={cadastrodeproduto} class="card-img-top" width="80" height="50" alt="..."/>
  <div className="card-subtitle mb-2 text-muted">
    <h5 className="card-title">Fornecedores</h5>
    <p className="card-text">Lista de fornecedores.
      .</p>
    <a href="sasdsd" class="btn btn-primary">Verificar</a>
  </div>
</div>



      </div>
    </div>



    
  );
}

export default Signup;