export default function SharingCard() {
  return (
    <>
      <div className="Sharing">
        <div className="innerCard">
          <div className="frontSide">
            <img src="src/public/images/card/Sharing.png" />
          </div>
          <div className="backSide">
            <p className="title">Co-working space</p>
            <h1>Sharing is Caring</h1>
            <div className="description">
              <h2>Welcome to the co-working space of Jessica & Arnaud!</h2>

              <p>
                This fictional project , was developed as a team, during our
                bootcamp at Wild Code School.
              </p>
            </div>
            <div className="hardskills">
             <p> JavaScript · GitHub · Figma · CSS3 · HTML5 · Responsive 
            </p>
            </div>
            <div className="link">
                <a href="https://dreallers.github.io/sharing_is_caring/">View Site</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
