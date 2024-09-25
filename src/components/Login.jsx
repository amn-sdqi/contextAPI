import { useState, useContext } from "react";
// import "./Login.css";
import UserContext from "../Context/userContext";

function Login() {
	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const { setUser } = useContext(UserContext);

	const handleSubmit = (event) => {
		event.preventDefault();
		setUser({ username, password });
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<p id="heading">Login</p>
			<div className="field">
				<input
					placeholder="Username"
					className="input-field"
					value={username}
					onChange={(e) => {
						setUserName(e.target.value);
					}}
					type="text"
				/>
			</div>
			<div className="field">
				<input
					className="input-field"
					placeholder="Password"
					type="password"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
			</div>
			<div className="btn">
				<button className="button1" type="submit">
					Login
				</button>
			</div>
		</form>
	);
}

export default Login;
