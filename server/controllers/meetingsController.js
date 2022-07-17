const Groups = require("../models/groups")
const Users = require("../models/users")
const Meetings = require("../models/meetings")

const moment = require("moment")

async function createMeeting(data){
    const newMeeting = await Meetings.create({
        name: data.name,
        duration: data.length,
        admin:data.self,
        haveUploaded: [],
        haveNotUploaded: data.addedMembers,
        range: [moment(data.range[0],'YYYY-MM-DD'),moment(data.range[1],'YYYY-MM-DD')],
        slots:[]
    })
    await Groups.updateOne(
        {_id:data.groupId},
        {$push:{meetings:newMeeting._id}}
    )
    return newMeeting._id
}

async function getMeeting(data){
    const meetingInfos = []
    if(!data.meetingId)
        return meetingInfos
    for(const meetingId of data.meetingId){
        const meetingInfo = await Meetings.findOne({_id:meetingId})
        if(meetingInfo.haveNotUploaded.includes(data.email))
            meetingInfos.push(meetingInfo)
        else if(meetingInfo.admin===data.email)
            meetingInfos.push(meetingInfo)
        for(const member of meetingInfo.haveUploaded){
            if(member.user === data.email){
                meetingInfos.push(meetingInfo)
                break
            }
        }
    }
    return meetingInfos
}

async function addMember(data){
    await Meetings.updateOne(
        {_id:data.group},
        {$push:{haveNotUploaded:data.email}}
    )
}

async function uploadSchedule(data){
    await Meetings.updateOne(
        {_id:data.meetingId},
        {$push:{haveUploaded:{
            user:data.user,
            slots:data.slots
        }}}
    )
    await Meetings.updateOne(
        {_id:data.meetingId},
        {$pull:{haveNotUploaded:data.user}}
    )
}

exports.createMeeting=createMeeting
exports.getMeeting=getMeeting
exports.addMember=addMember
exports.uploadSchedule=uploadSchedule