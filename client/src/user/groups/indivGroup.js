import { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import { DialogTitle, DialogContent } from '@mui/material';
import axios from 'axios';

import CreateMeeting from './meetings/createMeeting';
import AddNewMember from './addNewGroupMember';
import IndivMeetingAdmin from './meetings/indivMeetingAdmin';
import IndivMeetingMember from './meetings/indivMeetingMember';

const IndivGroup = (props)=>{
    const group = props.group
    const [meetings,setMeetings] = useState(group.meetings)
    const [meetingInfos,setMeetingInfos] = useState([])
    const [open,setOpen] = useState(false)
    const [render,setRender] = useState(false)

    const [members,setMembers] = useState([group.members])

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const createUsersDisplay = ()=>{
        return members.map(member=>{
            return(
                <div key={member}>
                    {member}
                </div>
            )
        })
    }

    const createMeetingsDisplay = ()=>{
        return meetingInfos.map(meeting=>{
            return(
                <div key={meeting._id}>
                    {`${meeting.name}---${meeting.duration}hour`}
                    {meeting.admin===localStorage.getItem("email") ? 
                    <IndivMeetingAdmin meeting={meeting} rerender={setRender}/>:
                    <IndivMeetingMember meeting={meeting}/>}
                </div>
            )
        })
    }

    const getMeetingInfo = ()=>{
        var config = {
            method:"get",
            url:"http://localhost:5000/api/meetings/getMeeting",
            headers:{
                "Content-type":"application/json"
            },
            params:{
                email:localStorage.getItem('email'),
                meetingId:meetings
            }
        }
        axios(config)
        .then(res=>{
            setMeetingInfos(res.data.meetingInfos)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getMeetingInfo()
    },[meetings])

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
                <DialogTitle>{group.name}</DialogTitle>
                <DialogContent>
                    <p>Members:</p>
                    <AddNewMember group={group._id}/>
                    {createUsersDisplay()}
                    <p>Meetings:</p>
                    <CreateMeeting group={group._id} rerender={setMeetings}/>
                    {createMeetingsDisplay()}
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default IndivGroup