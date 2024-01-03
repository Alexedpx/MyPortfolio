export default function WookieCard() {
  return (
    <>
      <div className="Wookie">
        <div className="innerCard">
          <div className="FrontSide">
            <img src="/images/card/Wookie.png" />
          </div>
          <div className="BackSide">
            <p className="title">Ride through the Galaxy</p>
            <h1> Wookie Taxi </h1>
            <div className="description">
              <h2>
                Want to book a ride through the Galaxy? <br></br>
                It’s now possible with our company !
              </h2>
              <p>
                This fictional project is based on an interactive galaxy card.
                <br></br>
                It allows you to select the planet where you want to go and have
                some informations about it.
                <br></br>
                You can book your ride with many drivers choice. This project
                was developed as a team, during our bootcamp at Wild Code
                School.
              </p>
            </div>
            <div className="hardskills">
              <p>
                {" "}
                React.js · API · Responsive <br></br>
                Sprints planning · Agile method · GitHub · Figma
              </p>
            </div>
            <div className="link">
              <a
                href="https://wookie-taxi.vercel.app//"
                target="_blank"
                rel="noreferrer"
              >
                View Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
