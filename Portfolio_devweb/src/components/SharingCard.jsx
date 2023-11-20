export default function SharingCard() {
  return (
    <>
      <div className="Sharing">
        <div className="innerCard">
          <div className="frontSide">
            <img src="/images/card/Sharing.png" />
          </div>
          <div className="backSide">
            <p className="title">Co-working space</p>
            <h1>Sharing is Caring</h1>
            <h2>Welcome to the co-working space of Jessica & Arnaud!</h2>
            <div className="description">
              <p>
                In this natural place, you can find some openspaces, a chilling
                area, and a coffee bar. <br></br>
                You can also find a dining area, with homemade cooking.{" "}
                <br></br>
                This fictional project , was developed as a team, during our
                bootcamp at Wild Code School.
              </p>
            </div>
            <div className="hardskills">
              <p>
                {" "}
                JavaScript · CSS3 · HTML5 <br></br>
                Responsive · GitHub · Figma
              </p>
            </div>
            <div className="link">
              <a href="https://dreallers.github.io/sharing_is_caring/">
                View Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
