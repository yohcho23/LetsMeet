import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { DialogTitle, DialogContent } from '@mui/material';
//import axios from 'axios';

import AddNewMember from './addNewMeetingMember';

const IndivMeeting=(props)=>{
    const details = props.meeting
    const startDate = details.range[0].split("T")[0]
    const endDate = details.range[1].split("T")[0]

    const [open,setOpen] = useState(false)
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        props.rerender(prevRender=>!prevRender)
    };

    const createUsersDisplay=(users)=>{
        return users.map(user=>{
            return(
                <div key={user}>
                    {user}
                </div>
            )
        })
    }


    return(
        <div>
            <button variant="outlined" onClick={handleClickOpen}>
                View More
            </button>
            <Dialog 
                open={open} 
                onClose={handleClose}
                sx={{
                    "& .MuiDialog-container": {
                      "& .MuiPaper-root": {
                        width: "100%",
                        height: "100%",
                        maxWidth: "90vw",
                      },
                    },
                  }}
            >
                <DialogTitle>{details.name}</DialogTitle>
                <DialogContent>
                    <p>{`Time: ${startDate} to ${endDate} `}</p>
                    <AddNewMember details={details}/>
                    <p>Members who have uploaded:</p>
                    {createUsersDisplay(details.haveUploaded)}
                    <p>Members who have not uploaded:</p>
                    {createUsersDisplay(details.haveNotUploaded)}
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default IndivMeeting;