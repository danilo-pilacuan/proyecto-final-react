import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import {useState, useEffect} from "react";
import TipoProductoAdministrar from './../../componentes/TipoProductoAdministrar'
import { useSelector } from 'react-redux';

export default function TipoProductosAdmin(){
  const [show, setShow] = useState(false);

  const [data,setData] = useState([]);


  const [id,setId] = useState("");
  const [descripcion,setDescripcion] = useState("");

  const token = useSelector((state) => state.token);
  
  useEffect(() => {
    getTipoProductos()
    },[]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getTipoProductos=()=>{
        axios
      .get(process.env.REACT_APP_BASE_URL+"/api/TipoProducto",{
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
            .post(process.env.REACT_APP_BASE_URL+"/api/TipoProducto",{
                "id": id,
                "descripcion": descripcion,
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
                getTipoProductos();
                handleClose();
            } )
            .catch((error) => console.log("error"));

    };

  const deleteEvent=()=>{
    console.log("Handle Delete ------------------")
    getTipoProductos()
    alert("TipoProducto Eliminado exitosamente")
  }
        
  //const tipoProductos = data2.map((item) => <TipoProductoShow key={item.id} props={item}/>);
  const tipoProductos = data.map((item) => <TipoProductoAdministrar key={item.id} props={item} deleteEvent={deleteEvent}/>);

  return (
    <>
    <h2>
        Administrar TipoProductos
    </h2>
    <Button variant="primary" onClick={handleShow}>
        Agregar TipoProducto
      </Button>
    <table className="table">
        <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            {tipoProductos}
        </tbody>
        </table>

      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar TipoProducto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="idTipoProducto">Id</label>
                <input type="text" required className="form-control" id="idTipoProducto" value={id} onChange={(event)=>setId(event.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="descripcion">Descripcion</label>
                <input type="text" required className="form-control" id="descripcion" value={descripcion} onChange={(event)=>setDescripcion(event.target.value)}/>
            </div>
           
            <div className="form-group mt-3">
            <button className='btn btn-secondary m-1' onClick={handleClose}>
                Cancelar
            </button>
            <button type='submit' className='btn btn-primary m-1' variant="primary">
                Agregar TipoProducto
            </button>
            </div>
            
        </form>
        </Modal.Body>
      </Modal>
    </>
  );
}