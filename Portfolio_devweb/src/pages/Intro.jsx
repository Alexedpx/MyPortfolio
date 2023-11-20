import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";

export default function Intro() {
	return (
		<>
		
			<div className="background-animated">
			
				<div className="container-intro">
				<Logo />
					<div className="Welcome">
						<button>
							<NavLink to="/home">
								<h1> Welcome to my Portfolio. </h1>
								<br></br>
								<p>{`I'm Alexandra`}</p>
								<br></br>
								<h2> Front-end developer</h2>
							</NavLink>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
