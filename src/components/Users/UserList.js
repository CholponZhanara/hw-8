import Card from '../UI/Card'
import classes from './Userlist.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import { useState } from 'react'




const Userlist = (props) => {
const[confirm,setConfirm]= useState(null)
const[data, setData]= useState ([])

const WindowHandler = (event) =>{
setData(props.users.filter((el) => el.id !== event.target.id))
setConfirm({
	title:'Delete user',
	massage:'Are you sure?'

})
}
const dataHandler =() =>{
	props.getData(data)
	setConfirm(null)
}
const cancelHandler = () =>{
	setConfirm(null)
}
	return (
		<>
		{confirm && (
			<ErrorModal
				title={confirm.title}
				massage={confirm.massage}
				onConfirm={dataHandler}
				 >
					 <Button onClick={cancelHandler}>
						 Cancel
					 </Button>
					 </ErrorModal>

		)}
		<Card className={classes.users}>
			<ul>
				{props.users.map((user) => (
					<li key={user.id}>
						{user.name} ({user.age} years old)
						<Button onClick={WindowHandler} id={user.id} >
                           Delete
						</Button>
					</li>
				))}
			</ul>
		</Card>
		</>
	)
	
}
export default Userlist
