import React,  { useState, useEffect } from "react";
import Axios from "axios";


function Customers() {
  const [name, setName]=useState('');
  const [type, setType]=useState('');
  const [balance, setBalance]=useState('');
  const [custList,setCustList]=useState([]);

  useEffect(function(){ //display data on front end react page
    Axios.get("http://localhost:3001/api/get").then((response)=>{
      //console.log(response.data);
      setCustList(response.data);
    })
  },[])

  const submitInfo=()=>{  //whatever reviews you write in front end page, to transfer it to backend (post request)
    Axios.post("http://localhost:3001/api/insert",
    {cname:name,
    ctype:type,
    cbalance:balance
  }).then({},function(){
    alert("Successful insert!");
  });
  };
  const myFunction=()=>{
    var x = document.getElementById("myDIV");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
  }

    return (
      <div>
      <button class="pluss" onClick={myFunction}><i class="plus fa fa-plus-circle fa-4x"></i></button>
     
       

        <div className="form">
        <div id="myDIV">
        
        <label>Full name:</label>
        <input type="text" name="name" onChange={function(e){ 
      setName(e.target.value);  //to get the value that is entered in the front end.
    }}/>
        <label>Account type(current/savings):</label>
        <input type="text" name="type" onChange={function(e){
      setType(e.target.value);
    }} />
        <label>Balance</label>
        <input type="text" name="balance" onChange={function(e){
      setBalance(e.target.value);
    }} />

        <button  onClick={submitInfo}>Submit</button>
        </div>
        {custList.map((value)=>{
      return  <div class="card">
      <div class="card-header">
        {value.name}
      </div>
      <div class="card-body">
        <h5 class="card-title">Type: {value.type}</h5>
        <a href="#" class="btn btn-info">View</a>
      </div>
    </div>
      
    })}
    </div>
        
      </div>
    );
  }
  export default Customers;