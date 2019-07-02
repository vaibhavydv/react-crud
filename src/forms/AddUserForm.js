import React, { useState } from 'react'


const AddUserForm = props => {
    // for empty value
    const initialFormState = { id: null, name:'', mobile:'' }
    const [user, setUser] = useState(initialFormState)
    //function to update the state within the form
    const handleInputChange = event => {
    const { name, value } = event.target
    // ...xyz for previous array value
     setUser({ ...user, [name]: value })
  }

    return (   
        <form
        onSubmit={event => {
            event.preventDefault()
            if (!user.name || !user.mobile) return

            props.addUser(user)
            setUser(initialFormState)
        }}
        > 
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} />
            <label>Mobile</label>
            <input type="text" name="mobile" value={user.mobile} onChange={handleInputChange}/>
            <button>Add User</button>
        </form>
    )
}

export default AddUserForm