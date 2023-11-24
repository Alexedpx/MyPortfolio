export default function HackathonCard() {
  return (
    <>
      <div className="Noel">
        <div className="innerCard">
          <div className="fronsIde">
            <img src="/images/card/Noël.png" />
          </div>
          <div className="BackSidE">
            <p className="title">Hackathon Project</p>
            <h1>Noël en un clic</h1>
            <div className="description">
              <h2>Hackathon Winner, 1st place 🏆</h2>
              <p>
                {" "}
                This project helps you to organized your Christmas.
                <br></br>
                It is based on an interactive web application, where you can
                send your wishlist to Santa Claus, choose the movie you want to
                watch and select the menu you want.{" "}
              </p>
            </div>
            <div className="hardskills">
              <p>Done in only 20hours · React.js · GitHub · Figma</p>
            </div>
            <div className="link">
              <a
                href="https://noelenunclic.vercel.app//"
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
