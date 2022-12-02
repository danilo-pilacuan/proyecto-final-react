import axios from 'axios';
import {useState, useEffect,useReducer} from "react";
import { useSelector } from 'react-redux';

function MarcaAdministrar({props,deleteEvent})
{
    const {
        id,
        nombre
    } = props;
    const token = useSelector((state) => state.token);
    const handleAddCart=(id)=>{
        // console.log("Eliminar "+id)
        // axios.delete("https://bp-todolist.herokuapp.com/"+id)
        // .tden((response) => {
            
        // })

        // .catch((error) => console.log(error));
    }
    // const handleChange=() => {
    //     dispatch({type: 'checked',payload:!checked});
    //     axios.put("https://bp-todolist.herokuapp.com/"+id,{
    //         "description": description,
    //         "status": status==0?1:0,
    //         "id_autdor": 11,
    //         "finish_at": (new Date()).toISOString()
    //     })
    //     .tden((response) => {
            
    //     })        
    // }

    const deleteProduct=()=>{
        axios
            .delete(process.env.REACT_APP_BASE_URL+"/api/Marcas/"+id,{
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
        <td>{nombre}</td>
        <td>
            <button type="button" className="btn btn-warning m-1" onClick={() => handleAddCart(id)}>Editar</button>
            <button type="button" className="btn btn-danger m-1" onClick={() =>handleDelete() }>Eliminar</button>
        </td>
        
    </tr>
}

export default MarcaAdministrar;