import "./styles.css";

function Features(){
    return(
        <div className="feature">
            
            <br></br>
            
            <h5 className="do">What We Do</h5>
            
            <br></br>
            <h2 className="business">We enable business  <span className="growth mx-2">growth and development</span></h2>
            <br></br>
       <div className="container-sm" id="star">
        <div className="row">
            
        <div className="col-md-4" id="rap">
        
        <div className="icon"><img src="images/trust.png" id="trust" alt=""></img></div>
        <div className="content">
              <h3>Loans</h3>
            <div className="test"> Lapebo Savings Account gives you the advantages of competitive interest rates and the availability.. </div>
        </div>
        
        
        </div>
        <div className="col-md-4" id="rap1"> 
       
        <div className="icon"> <img src="images/money.png" id="trust" alt=""></img></div>
       <div className="content"> <h3>Savings</h3>
       <div className="test">
       Lapebo Savings Account gives you the advantages of competitive interest rates and the availability..
       </div>
       </div>
</div>
        <div className="col-md-4" id="rap2">
   
        <div className="icon"><img src="images/growth.png" id="trust" alt=""></img></div>
    <div className="content">
    <h3 className="my-2">E-banking</h3>
    <div className="test">
    Lapebo Savings Account gives you the advantages of competitive interest rates and the availability..
    </div>
    </div>
</div>
        </div>
        
       </div>
       <br></br><br></br>
         <div className="container"id="com">
        <div className="row">
            <div className="col-md-3"></div>
                <div className="col-md-6" id="to">
                                <button type="button" class="btn btn btn-lg me-3" id="lk" >Open account</button>
                                <button type="button" class="btn btn btn-lg me-3" id="lk"> Business loan</button>
                                <button type="button" class="btn btn btn-lg me-3" id="lk">Customer care</button>
                </div>
            <div className="col-md-3"></div>

        </div>
          <br></br>
       </div>
      <br></br><br></br><br></br>
      <div className="length">
        <hr></hr>
      </div>
        </div>
    )

}
export default Features