import './Landing.css';
import './image/logo.png'
function Landing() {
  return (
    <div>
      {/* Header part */}
      <header id="homeSection" className="header">
        <div className="bg-image">
          <nav className="navbar navbar-expand-lg light-green-bg">
            <div className="container-fluid">
              <a href="/" className="navbar-brand">
               <img src="logo.png" alt srcSet />

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
                    <a href="/signup" className="nav-link"><span className="badge text-bg-success">Signup</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="bg-text">
            We sell fresh products here
          </div>
        </div>
      </header>
      

  
    </div>
  );
}

export default Landing;
