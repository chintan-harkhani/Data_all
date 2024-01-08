const { UserService } = require("../services");

//create User
const CreateUser = async (req, res) => {
    try {
        const reqBody = req.body;

        if (reqBody.password !== reqBody.confirmpassword) {
            return res.send('Password and confirm password do not match.');
          }
        const email = await UserService.FindEmail(reqBody.email);
        if (email) {
            throw new Error("Email Already Created By This  " + email.email + " , Please Create Ohter email");
        };
        const user = await UserService.CreateUser(reqBody);
        if (!user) {
            throw new Error("User Not Created ");
        };
        res.status(200).json({ success: true, message: "User SuccessFully Created...!",  data : user });
    } catch (error) {
        res.status(401).json({ success: false, message: error.message });
    }
};

//user list
const UserList = async (req, res) => {
    try {
        const List = await UserService.UserList(req, res);
        if (!List) throw new Error("User List Not Found");

        res.status(200).json({ success: true, message: "User List SuccessFully Get...!", data: List });

    } catch (error) {
        res.status(401).json({ success: false, message: error.message })
    }
};

//user count
const UserCount = async (req, res) => {
    try {
        const count = await UserService.UserCount(req, res);
        if (!count) throw new Error("User Not Count ...!");

        res.status(200).json({ success: true, message: "User Count SuccessFully Count..!", data: count });
    } catch (error) {
        res.status(401).json({ success: false, message: error.message })
    }
}

//UserId
const UserId =async(req ,res)=>{
    try {
           const userId = req.params.userId;
           const id = await UserService.FindId(userId);
           if(!id) throw new Error("User Data Not Found..!");
           res.status(200).json({success : true , message : "User Data Get SuccessFully ...!" , data : id});
    } catch (error) {
        res.status(401).json({ success: false, message: error.message });
    }
};

//delete user
const DeleteUser =async (req,res)=>{
     try {
        const userId = req.params.userId;
        const id = await UserService.FindId(userId);
        if(!id) throw new Error("User Data Not Found..!");

        await UserService.DeleteUser(userId);
        res.status(200).json({success : true , message : "User Data Delete SuccessFully ...!" });
     } catch (error) {
        res.status(401).json({ success: false, message: error.message });
     }
}

//update user
const UpdateUser =async(req ,res) =>{
     try {
        const userId = req.params.userId;
        const id = await UserService.FindId(userId);
        if(!id) throw new Error("User Data Not Found..!");

        await UserService.UpdateUser(userId , req.body);
        res.status(200).json({success : true , message : "User Update Delete SuccessFully ...!" });
     } catch (error) {
        res.status(401).json({ success: false, message: error.message });
        
     }
}

//export

module.exports = {
     CreateUser,
     UserCount,
     UserList,
     UserId,
     DeleteUser,
     UpdateUser
}