import axios from "axios"
import { useState, useEffect } from "react"

import IndivGroup from './indivGroup'

const CurrentGroups = ()=>{
    const [groups, setGroups] = useState([])
    
    const getCurrentGroups = ()=>{
        var config={
            method:"get",
            url:"http://localhost:5000/api/groups/getGroups",
            header:{
                "Content-type":"application/json"
            },
            params: {
                email:localStorage.getItem("email")
            }
        }

        axios(config)
        .then((res)=>{
            setGroups(res.data.groups)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const populateCurrentGroups = ()=>{
        return groups.map(group=>{
            return(
                <div key={group._id}>
                    {group.name}
                    <IndivGroup group={group}/>
                </div>
            )
        })
    }
    useEffect(()=>{
        getCurrentGroups()
    },[])
    
    return(
        <div>
           {populateCurrentGroups()}
        </div>
    )
}

export default CurrentGroups