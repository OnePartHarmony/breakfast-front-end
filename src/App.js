// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import Home from './components/Home'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import BreakfastFoodCreate from './components/breakfastFood-components/CreateBreakfastFood.js'
import BreakfastFoodIndex from './components/breakfastFood-components/IndexBreakfastFood'
import BreakfastFoodShow from './components/breakfastFood-components/ShowBreakfastFood.js'

const App = () => {

  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])


  const clearUser = () => {
    setUser(null)
  }

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id) )
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
      )
		})
	}

	return (
		<Fragment>
			<Header user={user} />
			<Routes>
				<Route path='/' element={<Home msgAlert={msgAlert} user={user} />} />
				<Route
					path='/sign-up'
					element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
					path='/sign-in'
					element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
				path='/sign-out'
				element={
					<RequireAuth user={user}>
					<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
					</RequireAuth>
				}
				/>
				<Route
				path='/change-password'
				element={
					<RequireAuth user={user}>
					<ChangePassword msgAlert={msgAlert} user={user} />
					</RequireAuth>}
				/>
				<Route
					path='/create-breakfastFood'
					element={
					<RequireAuth user={user}>
						<BreakfastFoodCreate msgAlert={msgAlert} user={user} />
					</RequireAuth>}
				/>
				<Route
					path='/breakfastFoods'
					element={
					<RequireAuth user={user}>
						<BreakfastFoodIndex msgAlert={msgAlert} user={user} />
					</RequireAuth>}
				/>
				<Route
					path='/breakfastFoods/:id'
					element={
					<RequireAuth user={user}>
						<BreakfastFoodShow msgAlert={msgAlert} user={user} />
					</RequireAuth>}
				/>
			</Routes>
			{msgAlerts.map((msgAlert) => (
				<AutoDismissAlert
					key={msgAlert.id}
					heading={msgAlert.heading}
					variant={msgAlert.variant}
					message={msgAlert.message}
					id={msgAlert.id}
					deleteAlert={deleteAlert}
				/>
			))}
		</Fragment>
	)
}

export default App
