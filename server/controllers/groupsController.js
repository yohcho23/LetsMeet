const Groups = require("../models/groups")
const Users = require("../models/users")

async function createGroup(data){
    const newGroup = await Groups.create({
        name: data.groupName,
        admin: data.email,
        members: [data.email],
        inviteCode: "",
        meetings:[]
    })
    await Users.updateOne(
        {email:data.email},
        {$push:{currentGroups:newGroup._id}}
    )
    return newGroup
}

async function getGroups(data){
    const user= await Users.findOne({email:data.email})
    const groups = []
    for(const group of user.currentGroups){
        groups.push(await Groups.findOne({
            _id:group
        }))
    }
    return groups
}

async function addMember(data){
    await Users.updateOne(
        {email:data.email},
        {$push:{pendingInvites:data.group}}
    )
 }

async function removeGroup(data){
    await Users.updateOne(
        {email:data.email},
        {$pull:{currentGroups:data.group._id}}
    )
    await Groups.updateOne(
        {_id:data.group._id},
        {$pull:{members:data.email}}
    )
}

exports.createGroup=createGroup
exports.getGroups=getGroups
exports.addMember=addMember
exports.removeGroup=removeGroup
