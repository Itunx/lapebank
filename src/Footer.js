import "./styles.css";

function Footer(){
    return(
        <div className="footer" id="seed">
            <br></br><br></br><br></br>
            <div className="container" >
            <div class="container">
            <div class="col-md-12 row">
                <div class="col-lg-7 py-5" >
                    <a className="footer-nav-link" aria-current="page" href="home">Home</a>

                    <a className="footer-nav-link" aria-current="page" href="contactUs">Contact Us</a>

                    <a className="footer-nav-link" aria-current="page" href="faq">FAQ</a>

                    <a className="footer-nav-link" aria-current="page" href="about">About Us</a>

                    <a className="footer-nav-link" aria-current="page" href="careers">Careers</a>
                </div>
                <div class=" col-12 col-sm-12 col-lg-4 offset-lg-1 py-4">'
                    <a className="footer-nav-link d-inline" aria-current="page" href="tos">Terms Of Service</a>

                    <div class="dropdown d-inline-block">
                        <button class="btn btn-secondary dropdown-toggle p-4" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">

                            <span class="text-light px-3">Nigeria</span>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="lagos">lagos</a></li>
                            <li><a class="dropdown-item" href="ibadan">ibadan</a></li>
                            <li><a class="dropdown-item" href="ikorodu">ikorodu</a></li>
                        </ul>
                    </div>

                </div>

            </div>
            <div class="hr2"></div>
            <div class="row">
                <div class="col-md-4 py-5">
                    


                    <span class="copyright text-light">© Mr robot 2022. All right reserved.</span>
                </div>
                <div class=" col-4 col-md-2 offset-md-2 py-5">
                    <p class="text-light"><b>Resources</b></p>
                   
                </div>
                <div class=" col-4 col-md-2 py-5">
                    <p class="text-light"><b>Support</b></p>
                    <ul class="footer-links">
                        <li><a href>24/7 Chat</a></li>
                        <li><a href>Help Support</a></li>
                        <li><a href>Community</a></li>
                        <li><a href>Contact Us</a></li>
                    </ul>
                </div>
                
            </div>
        </div>
            </div>

        </div>
    )
}

export default Footer