import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import {useState, useEffect} from "react";
import ProductoAdministrar from './../../componentes/ProductoAdministrar'
import { useSelector } from 'react-redux';


export default function ProductAdmin(){
  const [show, setShow] = useState(false);

  const [data,setData] = useState([]);
  const [listaMarcas,setListaMarcas] = useState([]);
  const [listaTiposProducto,setListaTiposProducto] = useState([]);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [nombre,setNombre] = useState("");
  const [precio,setPrecio] = useState(0);
  const [descripcion,setDescripcion] = useState("");
  const [existencias,setExistencias] = useState(0);
  const [observaciones,setObservaciones] = useState("");
  const [fechaVencimiento,setFechaVencimiento] = useState("");
  const [marcaId,setMarcaId] = useState("");
  const [tipoProductoId,setTipoProductoId] = useState("");

  const token = useSelector((state) => state.token);

  useEffect(() => {
    getProductos();
    getMarcas();
    getTiposProducto();
    },[]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const getProductos=()=>{
        axios
      .get(process.env.REACT_APP_BASE_URL+"/api/Producto",{
          headers: {
              "Content-Type": "application/json","Authorization" :"Bearer "+token,
              "Access-Control-Allow-Origin":"http://localhost:3000",
              "Access-Control-Allow-Credentials":true
          }
      })
      .then((response) => {
          console.log(response.data)
          setData(response.data)
      } )
      .catch((error) => console.log(error));

    }

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
          setListaMarcas(response.data);
          setMarcaId(response.data[0].id);
      } )
      .catch((error) => console.log(error));

    }

    const getTiposProducto=()=>{
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
          setListaTiposProducto(response.data)
          setTipoProductoId(response.data[0].id);
      } )
      .catch((error) => console.log(error));

    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios
            .post(process.env.REACT_APP_BASE_URL+"/api/Producto",{
                "nombre": nombre,
                "precio": precio,
                "descripcion": descripcion,
                "existencias": existencias,
                "observaciones": observaciones,
                "fechaVencimiento": fechaVencimiento,
                "marcaId": marcaId,
                "tipoProductoId": tipoProductoId
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
                getProductos();
                handleClose();
            } )
            .catch((error) => console.log("error"));

    };

  const deleteEvent=()=>{
    console.log("Handle Delete ------------------")
    getProductos()
    alert("Producto Eliminado exitosamente")
  }
        
  //const productos = data2.map((item) => <ProductoShow key={item.id} props={item}/>);
  const productos = data.map((item) => <ProductoAdministrar key={item.id} props={item} deleteEvent={deleteEvent}/>);

  return (
    <>
    <h2>
        Administrar Productos
    </h2>
    <Button variant="primary" onClick={handleShow}>
        Agregar Producto
      </Button>
    <table className="table">
        <thead>
            <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Existencias</th>
            <th scope="col">Observaciones</th>
            <th scope="col">Fecha Vencimiento</th>
            <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            {productos}
        </tbody>
        </table>

      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" required className="form-control" id="nombre" value={nombre} onChange={(event)=>setNombre(event.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="precio">Precio</label>
                <input type="number" min="0.01" step="0.01"  required className="form-control" id="precio" value={precio} onChange={(event)=>setPrecio(parseFloat(event.target.value))}/>
            </div>
            <div className="form-group">
                <label htmlFor="descripcion">Descripcion</label>
                <input type="text" required className="form-control" id="descripcion" value={descripcion} onChange={(event)=>setDescripcion(event.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="existencias">Existencias</label>
                <input type="number" required className="form-control" id="existencias" value={existencias} onChange={(event)=>setExistencias(event.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="observaciones">Observaciones</label>
                <input type="text" required className="form-control" id="observaciones" value={observaciones} onChange={(event)=>setObservaciones(event.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="fechaVencimiento">Fecha Vencimiento</label>
                <input type="date" required className="form-control" id="fechaVencimiento" value={fechaVencimiento} onChange={(event)=>setFechaVencimiento(event.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="marcaId">Marca</label>
                {/* <input type="text" required className="form-control" id="marcaId" value={marcaId} onChange={(event)=>setMarcaId(event.target.value)}/> */}
                <select required onChange={(e)=>{setMarcaId(e.target.value)}} className="form-select">
                    {listaMarcas.map((option) => (
                    <option key={option.id} value={option.id}>{option.nombre}</option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="tipoProductoId">Tipo de Producto</label>
                {/* <input type="text" required className="form-control" id="tipoProductoId" value={tipoProductoId} onChange={(event)=>setTipoProductoId(event.target.value)}/> */}
                <select required onChange={(e)=>{setTipoProductoId(e.target.value)}} className="form-select">
                    {listaTiposProducto.map((option) => (
                    <option key={option.id} value={option.id}>{option.descripcion}</option>
                    ))}
                </select>
            </div>
            <div className="form-group mt-3">
            <button className='btn btn-secondary m-1' onClick={handleClose}>
                Cancelar
            </button>
            <button type='submit' className='btn btn-primary m-1' variant="primary">
                Agregar Producto
            </button>
            </div>
            
        </form>
        </Modal.Body>
      </Modal>
    </>
  );
}