import React, {useState} from "react";
import EditUser from "./EditUser";
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import { deleteUser, updateUser } from "../services/users";
import {useMutation, useQueryClient} from 'react-query';

function UserItem({user}) {
    const [isEdit, setIsEdit] = useState(false)

    const queryClient = useQueryClient()

    const mutation = useMutation(deleteUser, {
        onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries('users')
        },
    })
    
    const updateMutation = useMutation(updateUser, {
        onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries('users')
        },
    })
     
    const deleteItem = () => mutation.mutate(user.id)


    const onCheck = (e) => {
        updateMutation.mutate({...user, isCheked: e.target.checked})
    }

    return(
        <ListItem>
            <Checkbox 
                checked={user?.isCheked || false}
                onChange={onCheck}
            />
            {!isEdit ?
                <>
                    <ListItemText
                        primary={user?.name}
                        className={user?.isCheked ? 'isCheked' : ''}
                    />
                    <Stack direction="row" spacing={2}>
                        <Button onClick={() => setIsEdit(true)} variant="contained" color="secondary">Edit</Button>
                        <Button onClick={deleteItem} variant="contained" color="error">Delete</Button>
                    </Stack>
                </>
                :
                <EditUser update={() => {}} data={user} edit={setIsEdit} />
            }          
         </ListItem> 
    )
}

export default UserItem;