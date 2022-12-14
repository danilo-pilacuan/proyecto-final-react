import routesPublic from "../routes/routes-public";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NavegacionPublica = () => {
  const token = useSelector((state) => state.token);
  const navigate = useNavigate();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      aria-label="Eighth navbar example"
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          Curso React
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
            {routesPublic.map((route)=><li key={route.key} className="nav-item">
              <Link to={route.route} className="nav-link"> {route.name}</Link>
            </li>)} 
            
          </ul>
          <form className="form-inline my-2 my-lg-0">
            ({token.length==0?<button onClick={()=>{navigate("/login");}} className="btn btn-success m-1 my-2 my-sm-0" type="button">Iniciar Sesión</button>:
            <button className="btn btn-danger m-1 my-2 my-sm-0" type="button">Cerrar Sesión</button>})
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavegacionPublica;
