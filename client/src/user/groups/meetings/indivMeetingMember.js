import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { DialogTitle, DialogContent } from '@mui/material';
import axios from 'axios';

const IndivMeeting=(props)=>{
    const details = props.meeting
    const submitStatus= !details.haveNotUploaded.includes(localStorage.getItem("email"))
    const startDate = details.range[0].split("T")[0]
    const endDate = details.range[1].split("T")[0]


    const [open,setOpen] = useState(false)
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const createSubmissionDisplay=()=>{
        const start=startDate.replaceAll('-','/')
        const begin= new Date(start)

        const end=endDate.replaceAll('-','/')
        const stop= new Date(end)

        const numDays = (stop.getTime()-begin.getTime())/(1000*3600)
        console.log(numDays)

        return(
            <div>
                {
                    
                }
            </div>
        )
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
                    {submitStatus ?
                    <p>Submitted</p>:
                    createSubmissionDisplay()}
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default IndivMeeting;