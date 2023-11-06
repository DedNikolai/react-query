import React, {useState} from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { updateUser } from "../services/users";
import {useMutation, useQueryClient} from 'react-query';

function EditUser({data, edit}) {
    const [user, setIsEdit] = useState(data)
    const queryClient = useQueryClient()

    const updateMutation = useMutation(updateUser, {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries('users')
      },
  })

    const onChange = (e) => {
        setIsEdit({...user, name: e.target.value})
    }

    const updateItem = () => {
        edit(false);
        updateMutation.mutate({...user})
    }
            
    return(
        <>
          <TextField
            label="Data"
            value={user.name}
            onChange={onChange}
            size="small"
            fullWidth 
            sx={{marginRight: '20px'}}
          />
          <Stack direction="row" spacing={2}>
            <Button onClick={updateItem} variant="contained" color="success">Save</Button>
            <Button onClick={() => edit(false)} variant="contained" color="error">Cancel</Button>
          </Stack>  
        </>
      
    )
}

export default EditUser;