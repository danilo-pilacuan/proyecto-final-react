import { Outlet } from "react-router-dom";

import Footer from "./../componentes/footer";
import {useState, useEffect} from "react";

const Register = () => {
    const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [password2,setPassword2] = useState("");
  return (
    <>
      <div className="container py-3">
        <header>
        <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        aria-label="Eighth navbar example"
        >
        <div className="container">
            <a className="navbar-brand" href="/">
            Registrarse
            </a>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample07"
            aria-controls="navbarsExample07"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample07">
            
            </div>
        </div>
        </nav>
        </header>
        <main>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <h3>Registrar Usuario</h3>
                </div>
                <div className="card-body">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-6">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password"  value={password} onChange={(event)=>setPassword(event.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Confirmar Password</label>
                                <input type="password"  value={password2} onChange={(event)=>setPassword2(event.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <div style={{"marginTop":"10px"}}>
                            <button type="submit" className="btn btn-primary">Registrarse</button>
                            <button style={{"marginRight":"10px"}} type="submit" className="btn btn-secondary">Iniciar Sesión</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
                
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Register;
