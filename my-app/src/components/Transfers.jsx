import React, { useState } from "react";
import Axios from "axios";
import gif from "../images/1uoA-unscreen.gif";



function Transfers() {
  const [toname, settoname]=useState('');
  const [fromname, setfromname]=useState('');
  const [amount,setamount]=useState('');

  const transfers = function(e){
    e.preventDefault();
    console.log(toname, fromname, amount);
    var x=document.getElementById("div1");
    x.style.display="none";

    var b=document.getElementById("div4");
      b.style.display="block";
    var link = "http://localhost:3001/transact/"+toname+"/"+fromname+"/"+amount ;
    console.log(link);
    Axios.get(link).then((response)=>{
      console.log(response);
      function disap()
      {
        b.style.display="none";
        var flag=response.data.flag;
        if(flag==1)
        {
          var s=document.getElementById("div2");
          s.style.display="block";
        }
        else{
          var f=document.getElementById("div3");
          f.style.display="block";
        }
        

      }
      setTimeout(disap,4000);
     
    })
   }

   

    return (
      <div>
        
       

          <form  id="div1">
            
            <div class="form-row a">
              <div class="form-group col-md-6 sm-12">
                  <h1 class="t">Transfers</h1>
                  <label for="formGroupExampleInput">Customer 1 (TO):</label>
                  <input type="text" name="toname" class="form-control" id="formGroupExampleInput" placeholder="Customer1"  onChange={function(e){ 
                    settoname(e.target.value);  //to get the value that is entered in the front end.
                    }}/>
            
              </div>
              </div>
              <div class="row a">
            
            <div class="form-group col-md-6 sm-12">
              <label for="formGroupExampleInput2">Customer 2 (FROM):</label>
              <input type="text" name="fromname"class="form-control" id="formGroupExampleInput2" placeholder="Customer2" onChange={function(e){ 
              setfromname(e.target.value);  //to get the value that is entered in the front end.
              }}/>
            </div>
        </div>
          <div class="row a">
            <div class="form-group col-md-6 sm-12">
              <label for="formGroupExampleInput">Amount to be transferred:</label>
              <input type="text" name="amount"class="form-control amount" id="formGroupExampleInput" placeholder="Amount" onChange={function(e){ 
        setamount(e.target.value);  //to get the value that is entered in the front end.
      }}/>
            </div>
            </div>
            <button type="submit" onClick={transfers} class="btn btn-info bb">Transfer</button>
            
          </form>
        
          <div id="div2">
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap" rel="stylesheet" />
            <script src="https://kit.fontawesome.com/c8ee3dd930.js"></script>

            <div class="container">
              <div class="card ts">
                <div class="title">
     
                  <h2><b>"Transaction successful"</b></h2>
                </div>
                
                <div class="circle"></div>
              </div>
            </div>

          </div>
  
  
          <div id="div3">
            <div class="container">
              <div class="card tf">
                <div class="title">
     
                  <h2><b>"Transaction failed"</b></h2>
                </div>
                
                <div class="circle"></div>
              </div>
            </div>
          

          </div>
          <div id="div4"><img src={gif} class="giff" /></div>


      </div>
          
      
    );
  }
  export default Transfers;