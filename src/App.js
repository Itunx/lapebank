/* eslint-disable no-unused-vars */

import "./styles.css";


function App() {
  
  return (
    <div className="App py-3">
      <header className="App-header" id="top">
      <nav className="navbar navbar-expand-lg navbar py-3">
  <div className="container" id="navtab">
                <a className="navbar-brand" href="navbar">Lapebank</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span></button>
    <div className="navbar-nav mx-auto mb-2 mb-lg-0" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0" id="check">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="link">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="link">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="link">Contact us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="link">FAQ</a>
            </li>
      
      </ul>
      
    </div>
  </div>
</nav>
       
       
      </header>
          
    </div>
  );
}

export default App;
