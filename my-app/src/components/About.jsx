import React from "react";
import transfer from "../images/transfer.jpg";
import me from "../images/Photo.jpg";



function About() {
    return (
        <div>
  <div class="container py-5">
      <div class="row text-center">
          <div class="col-lg-6 col-sm-12">
              <h1 class="about_heading"><b>About Us</b></h1>
              
          </div>
      </div>
  </div>


  <div class="container crd">
      <div class="row text-center">

          
          <div class="col-xl-3 col-sm-6 mb-5 c">
              <div class="bg-white rounded shadow-sm py-5 px-4"><img src={me} alt="" width="100"class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                  <h5 class="mb-0">Gayatri VG</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                  <ul class="social mb-0 list-inline mt-3">
                      <li class="list-inline-item"><a href="https://github.com/gayatri2?tab=overview&from=2021-05-01&to=2021-05-13" class="social-link"><i class="fa fa-github text-primary"></i></a></li>
                      <li class="list-inline-item"><a href="https://www.linkedin.com/in/gayatri-godbole-b1a0471b6/" class="social-link"><i class="fa fa-linkedin text-primary"></i></a></li>
                  </ul>
              </div>
          </div>

        
          <div class="col-xl-3 col-sm-6 mb-5 c">
              <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-2.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                  <h5 class="mb-0">Samuel Hardy</h5><span class="small text-uppercase text-muted">President</span>
                  <ul class="social mb-0 list-inline mt-3">
                      
                      <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-github text-primary"></i></a></li>
                      <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin text-primary"></i></a></li>
                  </ul>
              </div>
          </div>

        
          <div class="col-xl-3 col-sm-6 mb-5 c">
              <div class="bg-white rounded shadow-sm py-5 px-4">
              <img src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-1.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                  <h5 class="mb-0">Tom Sunderland</h5><span class="small text-uppercase text-muted">Chairman</span>
                  <ul class="social mb-0 list-inline mt-3">
                      
                      <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-github text-primary"></i></a></li>
                      <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin text-primary"></i></a></li>
                  </ul>
              </div>
          </div>

        
      </div>
  </div>
        </div>
    );
  }
  export default About;