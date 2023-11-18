export default function WookieCard() {
    return (
      <>
        <div className="Wookie">
          <div className="innerCard">
            <div className="FrontSide">
              <img src="src/public/images/card/Wookie.png" />
            </div>
            <div className="BackSide">
              <p className="title">Ride through the Galaxy</p>
              <h1>Wookie Taxi</h1>
              <div className="description">
                <h2>Want to book a ride through the Galaxy?
                    <br></br>
                It’s now possible with our company, Wookie Taxi !</h2>
                <p>
                This fictional project , was developed as a team, during our bootcamp at Wild Code School. 
                </p>
              </div>
              <div className="hardskills">
               <p> API · Sprints planning · Agile method · React.js · GitHub · Figma
              </p>
              </div>
              <div className="link">
                  <a href="https://wookie-taxi.vercel.app//">View Site</a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  