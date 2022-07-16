import React, { useEffect, useState } from 'react';
import axios from 'axios'

const PendingGroups=()=>{
    const [pendingGroups,setPendingGroups] = useState([])
    const getPendingGroups=()=>{
        var config = {
            method:"get",
            url:"http://localhost:5000/api/users/getPendingGroups",
            headers:{
                "Content-type":"application/json"
            },
            params:{
                email:localStorage.getItem("email")
            }
        }
        axios(config)
        .then(res=>{
            setPendingGroups(res.data.groups)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const handleAccept=(group)=>{
        setPendingGroups(prevPendingGroups=>{
            const newPendingGroups=prevPendingGroups.filter(pendingGroup=>pendingGroup.groupName!==group.groupName)
            return newPendingGroups
        })
        var config = {
            method:"post",
            url:"http://localhost:5000/api/users/acceptPendingUser",
            headers:{
                "Content-type":"application/json"
            },
            params:{
                groupId:group.groupId,
                email:localStorage.getItem("email")
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
    const handleDecline=(group)=>{
        setPendingGroups(prevPendingGroups=>{
            const newPendingGroups=prevPendingGroups.filter(pendingGroup=>pendingGroup.groupName!==group.groupName)
            return newPendingGroups
        })
        var config = {
            method:"post",
            url:"http://localhost:5000/api/users/rejectPendingUser",
            headers:{
                "Content-type":"application/json"
            },
            params:{
                groupId:group.groupId,
                email:localStorage.getItem("email")
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
    const createPendingGroupsDisplay=()=>{
        if(pendingGroups.length===0)
            return(
                <div>
                    No Pending Invites
                </div>
            )
        return pendingGroups.map(group=>{
            return(
                <div key={group.groupId} id={group.groupId}>
                    <p>{`${group.groupName}-${group.groupAdmin}`}</p>
                    <button onClick={()=>handleAccept(group)}>Accept</button>
                    <button onClick={()=>handleDecline(group)}>Decline</button>
                </div>
            )
        })
    }
    useEffect(()=>{
        getPendingGroups()
    },[])
   
    
    return(
        <div>
            {createPendingGroupsDisplay()}
        </div>
    )
}

export default PendingGroups