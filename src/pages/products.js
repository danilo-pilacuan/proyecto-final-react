import axios from 'axios';
import {useState, useEffect} from "react";
import ProductoShow from './../componentes/ProductoShow'
import clientHttp from './../services/ClientHttp'
import { useSelector } from 'react-redux';
export default function Products(){
    const [data,setData] = useState([]);
    const token = useSelector((state) => state.token);
    useEffect(() => {
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

      },[]);
    const data2=[1,2,3];
    //const productos = data2.map((item) => <ProductoShow key={item.id} props={item}/>);
    const productos = data.map((item) => <ProductoShow key={item.id} props={item}/>);
    return <>
    <h2>
        Productos
    </h2>
    <table className="table">
        <thead>
            <tr>
            <th scope="col">nombre</th>
            <th scope="col">precio</th>
            <th scope="col">descripcion</th>
            <th scope="col">existencias</th>
            <th scope="col">observaciones</th>
            <th scope="col">fechaVencimiento</th>
            <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            {productos}
        </tbody>
        </table>
    </>
}