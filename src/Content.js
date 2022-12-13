import "./styles.css";

function Content() {
  return (
    <div className="Content">
      <br></br>
      <br></br>
      <br></br>
      <div class="container">
        <div className="row" id="phone1">
          <div className="col-md-6">
            <div class="sectionTag">
              <span id="tag">Smart Banking</span>
            </div>
            <br></br>
            <br></br>
            <h3 id="moto" className="py-3">
              Explore Your first choice for monetary needs where you can save,
              make payments, manage your money whenever you want, wherever you
              are!
            </h3>
            <br></br>
            <p id="motto">
              you’re richer than you think,you just need Lapebank.
            </p>
            <br></br>
            <div className="Bot">
              <button
                type="button"
                id="bott1"
                class="btn btn_1 text-center mt-3"
              >
                {" "}
                <p class="mt-3 text-center">Download App</p>
              </button>
              <button
                type="button"
                id="bott"
                class="btn btn_1 text-center mt-3"
              >
                {" "}
                <p class="mt-3 text-center">Open Accounts</p>
              </button>
            </div>
          </div>

          <div className="col-md-6" id="phone">
            <img src="images/smiling.jpg" alt=""></img>
          </div>
        </div>
      </div>
      <div className="length">
        <hr></hr>
      </div>
    </div>
  );
}
export default Content;
