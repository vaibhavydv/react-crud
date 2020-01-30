import React, { useState, useEffect } from 'react';

const EditUserForm = props => {
    useEffect(() => {
        setUser(props.currentUser)
    }, [props])
    const [user, setUser] = useState(props.currentUser)

    const handleInputChange = event => {
        const { name, value} = event.target

        setUser({ ...user, [name]: value })
    }
    return (
        <form
            onSubmit={event => {
                event.preventDefault()

                props.updateUser(user.id, user)
            }}
        >
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} />
            <label>Mobile</label>
            <input type="number" name="mobile" value={user.mobile} onChange={handleInputChange} />
            <button>Update user</button>
            <button onClick={() => props.setEditing(false)} className="button muted-button">
                Cancel
      </button>
        </form>
    )
}

export default EditUserForm
