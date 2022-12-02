import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import {useState, useEffect} from "react";
import MarcaAdministrar from './../../componentes/MarcaAdministrar'
import { useSelector } from 'react-redux';

export default function MarcasAdmin(){
  const [show, setShow] = useState(false);

  const [data,setData] = useState([]);


  const [id,setId] = useState("");
  const [nombre,setNombre] = useState("");

  const token = useSelector((state) => state.token);

  useEffect(() => {
    getMarcas()
    },[]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getMarcas=()=>{
        axios
      .get(process.env.REACT_APP_BASE_URL+"/api/Marcas",{
          headers: {
              "Content-Type": "application/json","Authorization" :"Bearer "+token,
              "Access-Control-Allow-Origin":"http://localhost:3000",
              "Access-Control-Allow-Credentials":true
          }
      })
      .then((response) => {
          console.log(response.data)
          setData(response.data);
      } )
      .catch((error) => console.log(error));

    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios
            .post(process.env.REACT_APP_BASE_URL+"/api/Marcas",{
                "id": id,
                "nombre": nombre,
              },{
                headers: {
                    "Content-Type": "application/json","Authorization" :"Bearer "+token,
                    "Access-Control-Allow-Origin":"http://localhost:3000",
                    "Access-Control-Allow-Credentials":true
                }
            })
            .then((response) => {
                // console.log(response.data)
                // setData(response.data)
                getMarcas();
                handleClose();
            } )
            .catch((error) => console.log("error"));

    };

  const deleteEvent=()=>{
    console.log("Handle Delete ------------------")
    getMarcas()
    alert("Marca Eliminado exitosamente")
  }
        
  //const marcas = data2.map((item) => <MarcaShow key={item.id} props={item}/>);
  const marcas = data.map((item) => <MarcaAdministrar key={item.id} props={item} deleteEvent={deleteEvent}/>);

  return (
    <>
    <h2>
        Administrar Marcas
    </h2>
    <Button variant="primary" onClick={handleShow}>
        Agregar Marca
      </Button>
    <table className="table">
        <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            {marcas}
        </tbody>
        </table>

      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Marca</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="idMarca">Id</label>
                <input type="text" required className="form-control" id="idMarca" value={id} onChange={(event)=>setId(event.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" required className="form-control" id="nombre" value={nombre} onChange={(event)=>setNombre(event.target.value)}/>
            </div>
           
            <div className="form-group mt-3">
            <button className='btn btn-secondary m-1' onClick={handleClose}>
                Cancelar
            </button>
            <button type='submit' className='btn btn-primary m-1' variant="primary">
                Agregar Marca
            </button>
            </div>
            
        </form>
        </Modal.Body>
      </Modal>
    </>
  );
}