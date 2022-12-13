import "./styles.css";

function Services(){
    return(
        <div className="service">
          <br></br><br></br>
          <h4 className="do">We Have  Been In This Business   <span className="growth mx-2">For So Long</span></h4>
       <h1 className="systemx">Our Banking System</h1>
       <br></br><br></br>

     
       <div className="container">
        <div className="row">
            <div className="col-md-1"></div>
        <div className="col-md-10" id="fil">
                <div className="mobi">
                  <img src="images/mobile.jpg" id="pics"  alt=""></img>
                </div>
            
            <div className="details"> 
                  <p>LapeBank mobile is the first FREE mobile banking app in Nigeria.<br></br> Every client can perform all the available transactions free of <br></br>
                  charge.<br></br><br></br>
                  LapeBank mobile is fast, secure and convenient and enables<br></br> you to execute basic banking transactions from your LapeBank<br></br> account through your mobile phone.
                 <br></br><br></br>
                  <a href="learnmore">Lets get started</a>
</p>
            </div>
       </div>
            <div className="col-md-1"></div>
        </div>
       </div>
       <br></br>
        </div>
    )
}
export default Services