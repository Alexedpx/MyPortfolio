import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <>
    <div className="container-presentation">
      <div className="logo">
        <NavLink to="/home">
        <p>AD</p>
        </NavLink>
      </div>
      </div>
    </>
  );
}
