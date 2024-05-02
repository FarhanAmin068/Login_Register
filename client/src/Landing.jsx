import './Landing.css';
import logo from './image/logo.png';
import cowlogo from './image/cowlogo.png'
import goatlogo from './image/goatlogo.png'
import chickenlogo from './image/chickenlogo.png'
import ducklogo from './image/ducklogo.png'
import faq from './image/faq.png'
import livestock from './image/main.png'
import Dashboard from './Dashboard';

function Landing() {
  return (
    <div className='landing-div'>
      {/* Header part */}
      <header id="homeSection" className="header">
        <div className="bg-image">
          <nav className="navbar navbar-expand-lg light-green-bg">
            <div className="container-fluid">
              <a href="/" className="navbar-brand">
               <img src={logo} className='logo_img' alt srcSet />

              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="#homeSection"><span className="badge text-bg-success">Home</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#faqSection"><span className="badge text-bg-success">FAQ</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contactUsSection"><span className="badge text-bg-success">Contact Us</span></a>
                  </li>
                  <li className="nav-item">
                    <a href="/login" className="nav-link"><span className="badge text-bg-success">Login</span></a>
                  </li>
                  <li className="nav-item">
                    <a href="/register" className="nav-link"><span className="badge text-bg-success">Signup</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          
        </div>

        <div id="carouselExample" class="carousel slide  light-green-bg rounded bg-opacity-10 p-5">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                  <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
                      <div>
                          <h1>Fresh products 
                             <br/> Fresh Mood
                          </h1>
                          <p>       We provide fresh Livestock and Products obtained from them
                          </p>
                          <div class="mt-4">
                            <button class="btn btn-success btn-rounded" type="button"> Explore More  <i class="fa-sharp fa-solid fa-compass"></i></button>
                            
                          
                        </div>
                       
                      </div>
                  </div>
                  <div class="col-12 col-md-6">
                      <img src={livestock} class="d-block w-100" alt="..."/>
                  </div>
              </div>
            </div>
            
          </div>
          {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon bikerz-zone-light-red" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon bikerz-zone-light-red" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button> */}
        </div>
      </header>
      
      <main>
       <section>
        <h1 class="pt-3 text-lg-center text-sm-start">What We Provide</h1>
        <p class=" pt-3 text-lg-center text-sm-start">
         We Provide Various types of livestock proudcts .
         Our customers <br/>can buy Livestocks all well as products obtained from them.
        </p>
        <div class="container text-center">
          <div class="row g-2">
            <div class="col-sm-6 col-12">
              <div class="p-2 livestock-container">
                <img class="livestock-image img-fluid" src={cowlogo} alt=""/>
                <h2 class="pt-3 text-lg-center text-sm-start">Cow</h2>
                <p>We Provide cows,as well as their meat and milk</p>
                
              </div>
            </div>
            <div class="col-sm-6 col-12">
              <div class="p-2 livestock-container">
                <img class="livestock-image img-fluid" src={goatlogo} alt=""/>
                <h2 class="pt-3 text-lg-center text-sm-start">Goat</h2>
                <p>We Provide goats,as well as their meat and milk</p>
              
              </div>
            </div>
        
            <div class="col-sm-6 col-12">
              <div class="p-2 livestock-container">
                <img class="livestock-image img-fluid" src={chickenlogo} alt=""/>
                <h2 class="pt-3 text-lg-center text-sm-start">Chicken</h2>
                <p>We Provide Chicken,their meat and their egg.</p>
           
              </div>
            </div>
            <div class="col-sm-6 col-12">
              <div class="p-2 livestock-container">
                <img class="livestock-image" src={ducklogo} alt=""/>
                <h2 class="pt-3 text-lg-center text-sm-start">Duck</h2>
                <p>We Provide Ducks,their meat and their egg.</p>
               
              </div>
            </div>
         
          </div>
        </div>
      </section>
      <section id="ourSales">
        <h1 className='sales'>Our Sales Over the years</h1>
        <Dashboard></Dashboard>

      </section>
      
      <section id="faqSection">
        <h1 class="mt-5 pt-3 text-lg-center text-sm-start">Frequently asked questions</h1>
        <p class=" pt-3 text-lg-center text-sm-start">
         We get many questions from our customers.
         <br/>We have answered most of the frequently asked questions.
        </p>
        <div class="row row-cols-1 row-cols-md-2 mt-5 g-4">
         
          <div class="col">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button custom-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                   <b> Do We have Home Delivery System?</b>
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body"><strong>Yes, our company will deliver fresh Product to your address. We have safe Transportation system.</strong></div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button custom-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                   <b> Is Our Product Fresh?</b>
                  </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body"><strong>Yes We Provide fresh and healthy live stock Products throughout the country.</strong></div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button custom-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                   <b> What do we use to preserve our meat?</b>
                  </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body"><strong>Nitrates and nitrites are commonly used as chemical food preservatives for meat products. Like sodium benzoate, these chemicals inhibit bacterial and fungal growth, particularly the growth of Clostridium botulinum, which causes botulism.</strong></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col text-center">
            <img class="w-50 img-fluid" src={faq} alt=""/>
        </div>
      </div>
      </section>
    </main>

    <footer id="contactUsSection">
      <section class="Footer" id="footer">
      <div class="final-section mt-5 mb-5">
        <div class="container text-center">
          <div class="row row-cols-2">
           
            <div class="col-sm-6 col-12"> 
             
              <h1 class="fw-5  pt-5">Contact Now</h1>
                <div class="address_details">
                  <i class="fas fa-map-marker-alt"></i>
             <p ><b>Address:<br/>
            </b>Pahartoli,Rauzan,CUET</p>
            </div>
            <div class="phone details">
              <i class="fas fa-phone-alt"></i>
             <p ><b>Phone no:</b><br/>
              01318879104<br/>
                 01879-984402
                <br/>01400-889168</p>
            </div>
            <div class="email details">
              <i class="fas fa-envelope"></i>
             <p><b>Email:</b><br/>
              u2004068@student.cuet.ac.bd<br/>
              u2004072@student.cuet.ac.bd<br/>
              u2004091@student.cuet.ac.bd</p>
            </div>
  
            </div>
            <div class="col-sm-6 col-12">     
              <h1 class="fw-5  pt-5">Subscribe</h1>
              <p >
                Subscribe for our latest <br/> Updates. We Won’t Give You<br/> Spam Mails
              </p>
              <div class="text-center d-flex">
                <input type="Email" name="" id="" placeholder="Email address" class="w-100 p-3 no-border " />
              <button class="btn-primary1 ms-auto sm-" type="submit"><i class="fa-solid fa-location-arrow"></i>
              </button>
            </div>
            </div>
      </div>
      </div>
      </div>
      
      </section>
     </footer>
  
    </div>
  );
}

export default Landing;