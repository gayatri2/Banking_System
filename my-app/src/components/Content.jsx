import React from "react";
import transfer from "../images/transfer.jpg";

function Content() {
    return (
    <div>
      <div class="row">
        <div class="col-lg-6">
          <h1 className="home_heading">
            <b>TE bank welcomes you!</b>
          </h1>
          <p className="home_para">
            <b>~(T)ransfer (E)fficiently across continents, safe and secure.</b>
          </p>
        </div>
        <div class="col-lg-6">
          <img src={transfer} class="transfer_img" />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-9 bank">
          <p>
          A bank is a financial institution that accepts deposits from the public and creates a demand deposit while simultaneously making loans. 
          Lending activities can be directly performed by the bank or indirectly through capital markets. It allows transfer of money between multiple customers as well.
          </p>
        </div>
      </div>
    </div>
    );
  }
  export default Content;
  