const Groups = require("../models/groups")
const Users = require("../models/users")

async function createGroup(data){
    const newGroup = await Groups.create({
        name: data.groupName,
        admin: data.email,
        inviteCode: "",
        meetings:[]
    })
    await Users.updateOne(
        {email:data.email},
        {$push:{currentGroups:newGroup._id}}
    )
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

exports.createGroup=createGroup
exports.getGroups=getGroups
exports.addMember=addMember