import SignIn from "./auth/SignIn"
import { Link } from "react-router-dom"
import BreakfastFoodIndex from "./breakfastFood-components/IndexBreakfastFood"


const Home = ({ msgAlert, user }) => {
	if (user) {
		return (
			<>
				<BreakfastFoodIndex user={user} msgAlert={msgAlert} />
			</>
		)
	} else {
		return (
			<div className="btn-group-lg text-center mt-4">
				<Link to='sign-up' className="me-3 btn btn-primary">Sign Up</Link>
				<Link to='sign-in' className="ms-3 btn btn-success">Sign In</Link>
			</div>
			

		)
	}
	
}

export default Home
