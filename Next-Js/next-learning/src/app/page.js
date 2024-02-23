'use client'
// import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from '../../pages/Navbar';
import { useState } from 'react';
import Link from 'next/link';
// import { BrowserRouter as Main , Route,Routes } from 'react-router-dom';
export default function Home() {

  const [name,setName]=useState("jay");
  const chngnm=()=>
  {
    setName("parmar jay");
  }
  return (
    <>
     {/* <Navbar /> */}

     <nav className="navbar navbar-expand-lg bg-primary-subtle">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link href="/about" className="nav-link ">About</Link>
          </li>
          <li className="nav-item">
          <Link href="/login" className="nav-link ">Register</Link>          
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>


    <div className='container bg-success-subtle py-3'>
      <h1>
        hello {name}
      </h1>
      <button onClick={chngnm} className='btn btn-outline-primary'>Click Me</button>
    </div>


    


     


    </>

  )
}
