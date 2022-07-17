import { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import { DialogTitle, DialogContent } from '@mui/material';
import axios from 'axios';

import "./styles/indivMeetingMember.css"

const IndivMeeting=(props)=>{
    const details = props.meeting
    const submitStatus= !details.haveNotUploaded.includes(localStorage.getItem("email"))
    const startDate = details.range[0].split("T")[0]
    const endDate = details.range[1].split("T")[0]

    const [open,setOpen] = useState(false)
    const [submission, setSubmission] = useState([])

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const fetchSubmission=()=>{
        if(!submitStatus){
            const start=startDate.replaceAll('-','/')
            const begin= new Date(start)

            const end=endDate.replaceAll('-','/')
            const stop= new Date(end)

            const numHours = (stop.getTime()-begin.getTime())/(1000*3600)
            const boxCount = []

            for(let i = 0; i < numHours; i+=0.5){
                boxCount.push(false)
            }
            setSubmission(boxCount)
        }
    }

    useEffect(()=>{
        fetchSubmission()
    },[])

    const handleClick=(slot)=>{
        setSubmission(prevSubmission=>{
            const newSubmission = [...prevSubmission]
            newSubmission[slot] = !prevSubmission[slot]
            return newSubmission
        })
    }

    const handleSubmitSubmission=()=>{
        const availableSlots=[]
        for(let i =0; i<submission.length;i++){
            if(submission[i])
                availableSlots.push(i)
        }
        console.log(availableSlots)
        var config = {
            method:"post",
            url:"http://localhost:5000/api/meetings/uploadSchedule",
            headers:{
                "Content-type":"application/json"
            },
            data:{
                slots:availableSlots
            }
        }
        axios(config)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const createSubmissionDisplay=()=>{
        const display = []
        for(let i=0; i<submission.length/48;i++){
            const row =[]
            for(let j=0; j<48;j++){
                const color = submission[i*48+j] ? "green" : "red"
                row.push(
                <button 
                    className='selectorBox' 
                    key={`${i}-${j}`} 
                    onClick={()=>{handleClick(i*48+j)}}
                    style={{background:color}}
                >
                    {`value=${i}-${j}`}
                </button>
            )}
            display.push(
                <div key={i} className='selectorDay'>
                    {row}
                </div>
            )
        }
        display.push(
            <button key={"submitButton"} onClick={handleSubmitSubmission}>
                Submit
            </button>
        )
        return(
            <div className='selectorField'>
                {display}
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