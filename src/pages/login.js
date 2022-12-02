import axios from 'axios';
import { Outlet } from "react-router-dom";
import {useState, useEffect} from "react";
import {useSelector,useDispatch } from 'react-redux';
// import { addTodo } from '../redux/todoSlice';
import { setToken } from '../redux/tokenSlice';
//import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import Footer from "./../componentes/footer";
import NavegacionLogin from "./../componentes/nav-login";

const Login=()=> {
  
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

//   const tokenRed = useSelector((state) => {
//     console.log(state)
    
//     return state.tokens
//   });

    const token = useSelector((state) => state.token);

  const handleClickLogin=(event)=>
  {
    event.preventDefault();
    console.log("handlelogin")

    axios
            .post(process.env.REACT_APP_BASE_URL+"/api/login",{
                "userName": email,
                "contrasenia": password,
              },{
                headers: {
                    "Access-Control-Allow-Origin":"http://localhost:3000",
                    "Access-Control-Allow-Credentials":true
                }
            })
            .then((response) => {
                console.log(response.data)
                // setData(response.data)
                dispatch(
                    setToken({
                        value: response.data,
                    })
                );
                navigate("/admin");
            } )
            .catch((error) => console.log("error"));

  }
  const handleClickRegister=()=>
  {
    
  }

  return (
    <>
      <div className="container py-3">
        <header>
          <NavegacionLogin/>
          {token}
        </header>
        <main>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <h3>Iniciar Sesión</h3>
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
                            
                            <div style={{"marginTop":"10px"}}>
                            <button style={{"marginRight":"10px"}} type="submit" onClick={handleClickLogin} className="btn btn-primary">Iniciar Sesión</button>
                            <button style={{"marginRight":"10px"}} type="button" onClick={handleClickRegister} className="btn btn-secondary">Registrarse</button>
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
      {/* <ul className='list-group'>
			{todos.map((todo) => (
				<li key={todo.id} >{todo.title}</li>
			))}
		</ul> */}
        
    </>
  );
};

export default Login;
