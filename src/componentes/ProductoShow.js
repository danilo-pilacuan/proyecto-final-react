import axios from 'axios';
import {useState, useEffect,useReducer} from "react";

function ProductoShow({props})
{
    const {
        id,
        nombre,
        precio,
        descripcion,
        existencias,
        observaciones,
        fechaVencimiento,
        marcaId,
        tipoProductoId
    } = props;

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

    return <tr>
        <td>{nombre}</td>
        <td>{precio}</td>
        <td>{descripcion}</td>
        <td>{existencias}</td>
        <td>{observaciones}</td>
        <td>{fechaVencimiento}</td>
        <td><button type="button" className="btn btn-primary" onClick={() => handleAddCart(id)}>Añadir al Carro</button></td>
        
    </tr>
}

export default ProductoShow;