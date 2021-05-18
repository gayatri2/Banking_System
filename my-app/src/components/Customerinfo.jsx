import React, {useState,useEffect} from 'react';
import Axios from "axios";
import { useParams } from "react-router-dom";




function Customerinfo()
{
    const {name}=useParams();
    const [List,setList]=useState([]);
    useEffect(function(){ //display data on front end react page
        var link = "http://localhost:3001/Customerinfo/"+name ;
        console.log(link);
        Axios.get(link).then((response)=>{
          console.log(response.data[0]);
          setList(response.data[0]);
         
        })
  
         },[])
    return(
        
        <div>
        <div class="card cinfo" styles="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    
    <p class="card-text">{List.type}</p>
    <p class="card-text">{List.balance}</p>

    
  </div>
</div>

           
        </div>
        
    );
}
export default Customerinfo;