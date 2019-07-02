import React, { useState, Fragment} from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';

const App = () => {

  // Data
  const usersData = [
    { id: 1, name:'Vaibhav', mobile:'+91-945-776-8999' },
    { id: 2, name:'Rahul', mobile: '+91-889-564-7798'},
    { id: 3, name:'Raman', mobile: '+91-256-887-5564'},
  ]
  const initialFormState = { id: null, name: '', mobile: '' }

  // States
  const [users, setUsers] = useState(usersData)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  // Add User
  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user ])
  }

// Delete User
  const deleteUser = id => {
    setEditing(false)

    setUsers(users.filter(user => user.id !== id))
  }

  // Update  
  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  } 

  const editRow = user => {
    setEditing(true)
  
    setCurrentUser({ id: user.id, name: user.name, mobile: user.mobile })
  }
 
  return (
    <div className="container">
      <h1>Fav Contacts</h1>
      <hr/>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            // like div
            <Fragment>  
            <h2>Update User</h2>  
            <EditUserForm
            editing={editing}
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
            />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Add User</h2>
              <AddUserForm addUser={addUser} />
            </Fragment>  
          )}
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
      <br/>
      <hr/>
      <p>&copy; 2019 | Vaibhav Yadav</p>
    </div>
  )
}
export default App;
