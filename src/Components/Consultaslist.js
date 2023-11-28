import React, { useState, useEffect } from "react";
 
import { Link } from "react-router-dom";
import axios from "axios";
 
function Consultaslist()
{ 
    const[consultas, setConsultas]= useState([]);
     
    useEffect( ()=>{
        const getConsultas= ()=>{
            fetch("http://127.0.0.1:8000/api/consultas")
            .then(res=>{ return res.json()})
            .then(response=>{ 
                console.log(response.consultas)
                setConsultas(response.consultas)
            })
            .catch(error=>{ console.log(error)});
        }
        getConsultas();
    },[]);
  
   
    const deleteConsutas = (id) => {
        axios.delete('http://127.0.0.1:8000/api/consultasdelete/'+id).then(function(response){
            console.log(response.data);
            alert("Successfully Deleted");
        });
    }
     
    return(
        <React.Fragment>
            <div className="container container_overflow">
                <div className="row">
                    <div className="col-12">
                        <h5 className="mb-4">Lista de Consultas</h5> 
                        <p className="text-danger"> </p>                 
                                <table className="table table-bordered">
                                <thead>
                                <tr>
                                <th scope="col">Sr.No</th>
                                <th scope="col">Consulta</th>
                                <th scope="col">Data</th>
                                <th scope="col">Descrição</th>
                                <th scope="col">Imagem</th>
                                <th scope="col" width="200">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        consultas.map((pdata, index)=>(
                                            <tr key={index}>
                                            <td>{index+1 } </td>
                                            <td>{pdata.name } </td>
                                            <td>{pdata.data } </td>
                                            <td>{pdata.description } </td>
                                            <td><img src={`http://127.0.0.1:8000/storage/${pdata.image}`} alt="" height={50} width={90} /></td>
                                            <td>
                                                <Link to={`/editconsultas/${pdata.id}/edit`} className="btn btn-success mx-2">Edit</Link>
                                                <button onClick={() => deleteConsutas(pdata.id)} className="btn btn-danger">Delete</button>
                                            </td>
                                            </tr>
                                        ))
                                    }
                               
                                                                
                                </tbody>
                                </table>  
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Consultaslist;