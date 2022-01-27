import React, { Fragment } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import Classes from './AddUser.module.css'
import { useState } from 'react'
import ErrorModal from '../UI/ErrorModal'
// import Wrapper from '../Helpers'



const AddUser = (props) => {
	const [username, setUsername] = useState('')
	const [age, setAge] = useState('')
	const [error, setError] = useState(null)

	const usernameChangeHandler = (event) => {
		setUsername(event.target.value)
	}

	const AgeChangeHandler = (event) => {
		setAge(event.target.value)
	}

	const AddUserHandler = (event) => {
		event.preventDefault()
		if (username.trim().length === 0 || age.trim().length === 0) {
			setError({
				title: 'Invalid input',
				massage: 'please enter a valid name age (non empty  valuse)',
			})
			return
		}
		if (+age < 1) {
			setError({
				title: 'Invalid input',
				massage: 'please entee a valid age (> 0)',
			})
			return
		}
		props.onAddUser(username, age)

		setUsername('')
		setAge('')
	}

	const errorHandler = () => {
		setError(null)
	}

	return (
		<>
			{error && (
				<ErrorModal
					title={error.title}
					massage={error.massage}
					onConfirm={errorHandler}
				/>
			)}
			<Card className={Classes.input}>
				<form onSubmit={AddUserHandler}>
					<label htmlFor='username'>UserName</label>
					<input
						id='username'
						type='text'
						value={username}
						onChange={usernameChangeHandler}
					/>
					<label htmlFor='age'>Age(years)</label>
					<input
						id='age'
						type='numder'
						value={age}
						onChange={AgeChangeHandler}
					/>
					<Button type='submit'>Add user</Button>
				</form>
			</Card>
		</>
	)
}

export default AddUser
