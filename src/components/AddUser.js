import React, {useState} from "react";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {useMutation, useQueryClient} from 'react-query';
import {addUser} from '../services/users'

function AddUser() {
    const [name, setName] = useState('')
    const queryClient = useQueryClient()


    const mutation = useMutation(addUser, {
        onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries('users')
        },
      })

    const onChange = (e) => {
        setName(e.target.value);
    }

    const createUser = (e) => {
        e.preventDefault()
        mutation.mutate({name, isChecked: false})
        setName('')
    }

    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
            onSubmit={createUser}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="New User"
                inputProps={{ 'aria-label': 'add new' }}
                value={name}
                onChange={onChange} 
            />
            <IconButton onClick={createUser}  color="primary" sx={{ p: '10px' }} aria-label="directions">
                <AddCircleIcon />
            </IconButton>
          </Paper>
       
    )
}

export default AddUser;