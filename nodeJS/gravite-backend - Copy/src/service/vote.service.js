const { VoteModel} = require("../model");

//create
    const CreateVote =     async (reqBody) =>{
         return  (await (await VoteModel.create(reqBody)).populate("user")).populate("partylist")
    }
    //find Vote Id
const FindName = async (user) => {
    return VoteModel.findOne({ user });
}
// Vote list
const VoteList = async (req, res) => {
    return VoteModel.find().populate("user").populate("partylist");
};
//Vote id
const VoteId = async (voteId) => {
    return VoteModel.findById(voteId)
};
//delete Vote
const DeleteVote = async (voteId) => {
    return VoteModel.findByIdAndDelete(voteId)
};
module.exports = {
    CreateVote,
    FindName,
    VoteList,
    VoteId,
    DeleteVote,
}