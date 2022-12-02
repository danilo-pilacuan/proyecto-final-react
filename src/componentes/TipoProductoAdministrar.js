import axios from 'axios';
import {useState, useEffect,useReducer} from "react";
import { useSelector } from 'react-redux';
function TipoProductoAdministrar({props,deleteEvent})
{
    const {
        id,
        descripcion
    } = props;
    const token = useSelector((state) => state.token);
    const handleAddCart=(id)=>{

    }


    const deleteProduct=()=>{
        axios
            .delete(process.env.REACT_APP_BASE_URL+"/api/TipoProducto/"+id,{
                headers: {
                    "Content-Type": "application/json","Authorization" :"Bearer "+token,
                    "Access-Control-Allow-Origin":"http://localhost:3000",
                    "Access-Control-Allow-Credentials":true
                }
            })
            .then((response) => {
                // console.log(response.data)
                // setData(response.data)
                deleteEvent()
            } )
            .catch((error) => console.log("error"));

        
    }

    const handleDelete=()=>{
        deleteProduct()
    }

    return <tr>
        <td>{id}</td>
        <td>{descripcion}</td>
        <td>
            <button type="button" className="btn btn-warning m-1" onClick={() => handleAddCart(id)}>Editar</button>
            <button type="button" className="btn btn-danger m-1" onClick={() =>handleDelete() }>Eliminar</button>
        </td>
        
    </tr>
}

export default TipoProductoAdministrar;