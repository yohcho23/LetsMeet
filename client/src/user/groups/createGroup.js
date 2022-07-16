import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { DialogTitle, DialogContent } from '@mui/material';
import axios from 'axios';

const CreateGroup = ()=>{
    const [open,setOpen] = useState(false)
    const [groupName,setGroupName] = useState("")

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCreateGroup = ()=>{
        const data = JSON.stringify({
            groupName:groupName,
            email:localStorage.getItem("email")
        })

        var config = {
            method: "post",
            url: 'http://localhost:5000/api/groups/createGroup',
            headers: {
                'Content-Type':'application/json',
            },
            data: data
        }
        
        axios(config)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <div>
            <button variant="outlined" onClick={handleClickOpen}>
                Create New Group
            </button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Create New Group</DialogTitle>
                <DialogContent>
                    <form>
                        <label>New Group Name:
                            <input onChange={(e)=> setGroupName(e.target.value)}></input>
                        </label>
                        <button type='button' onClick={handleCreateGroup}>Create</button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default CreateGroup