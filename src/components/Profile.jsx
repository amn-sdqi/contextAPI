import { useContext } from "react";
import UserContext from "../Context/userContext";

function Profile() {
	const { user } = useContext(UserContext);

	if (!user) {
		return <div>Please Login !</div>;
	}

	return (
		<div>
			<h1>This is {user.username}'s profile</h1>
		</div>
	);
}

export default Profile;
