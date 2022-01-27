import React from 'react';
import AddUser from './components/Users/AddUser';
import Userlist from './components/Users/UserList';
import { useState } from 'react';
// import Wrapper from './components/Helpers';
// import { Fragment } from 'react';


function App() {
  const [users, setUsers] = useState([])

const AddUserHandler = (name, age) =>{
  setUsers([...users,{name, age, id:Math.random().toString()}])
} 
const getData = (data)=>{
setUsers(data)
}


  return (
    <>
<AddUser onAddUser={AddUserHandler}/>
<Userlist users={users} getData={getData}/>
    </>
  );
}

export default App;
