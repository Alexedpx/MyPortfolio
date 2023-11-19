import Footer from "../components/Footer";
import Logo from "../components/Logo";


export default function ContactCard() {
  return (
    <>
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div class="content"></div>
      <div className="container-presentation">
        <Logo />
      </div>
      <div className="container-contactcard">
        <div className="card-email">
          <h1>Contact</h1>
          <hr className="underline"></hr>
          <div className="email">
            <h2>MAIL</h2>

            <button>
              <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <p>
                <a href="mailto:alexandradepourtoux93@gmail.com">
                  alexandradepourtoux93@gmail.com
                </a>
              </p>
            </button>
            <p></p>
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  );
}
