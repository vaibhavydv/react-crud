import React from 'react';
//import './App.css';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';

const App = () => {
  const usersData = [
    { id : 1, name:'Vaibhav', mobile:'+91-945-776-8999' },
    { id: 2, name:'Rahul', mobile: '+91-889-564-7798'},
    { id: 3, name:'Raman', mobile: '+91-256-887-5564'},
  ]

  const [users, setUsers] = React.useState(usersData)
  // const [users, setUsers] = useState(usersData) undefined fixed

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users,user])
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }
  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: '', nobile: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const editRow = user => {
    setEditing(true)
  
    setCurrentUser({ id: user.id, name: user.name, mobile: user.mobile })
  }
  
  return (
    <div className="container">
      <h1>CRUD</h1>
      <hr/>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User</h2>
          <AddUserForm addUser ={addUser}/>
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}
export default App;
