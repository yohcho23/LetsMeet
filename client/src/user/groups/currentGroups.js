import axios from "axios"
import { useLocation, useNavigate } from 'react-router-dom';

import IndivGroup from './indivGroup'

const CurrentGroups = (props)=>{
    const groups = props.groups

    const removeGroup=(group)=>{
        var config={
            method:"post",
            url:"http://localhost:5000/api/groups/removeGroup",
            header:{
                "Content-type":"application/json"
            },
            data: {
                email:props.userInfo.email,
                group:group
            }
        }

        axios(config)
        .then((res)=>{
            props.rerender(prevGroups=>{
                const newGroups = []
                for(const currGroup of prevGroups){
                    if(currGroup._id!==group._id)
                        newGroups.push(currGroup)
                }
                return newGroups
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const populateCurrentGroups = ()=>{
        if(groups.length===0)
            return(
                <div>
                    No Pending Invites
                </div>
            )
        return groups.map(group=>{
            return(
                <div className='groups-page-content-main-current-individualDisplay' key={group._id}>
                    <h4>{group.name}</h4>
                    <div className='groups-page-content-main-current-individualDisplay-buttons'>
                        <IndivGroup userInfo={props.userInfo} group={group}/>
                        {props.userInfo.email !==group.admin && 
                        <button 
                            className="groups-page-content-main-current-individualDisplay-buttons-remove" 
                            onClick={()=>removeGroup(group)}
                        >❌</button>}
                    </div>
                </div>
            )
        })
    }
    
    return(
        <div>
           {populateCurrentGroups()}
        </div>
    )
}

export default CurrentGroups