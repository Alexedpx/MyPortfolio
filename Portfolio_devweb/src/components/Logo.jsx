import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <>
    <div className="container-logo">
      <div className="logo">
        <NavLink to="/home">
        <img src="src/public/images/logo/logo.png" />
        </NavLink>
      </div>
      </div>
     
    </>
  );
}
