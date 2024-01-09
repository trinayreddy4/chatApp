const mongoose=require('mongoose');

const userModel=mongoose.Schema(
    {
        name:
        {
            type:String,
            required:true
        },
        email:
        {
            type:String,
            requried:true
        },
        password:{
            type:String,
            requried:true
        },
        profilePic:{
            type:String,
            default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
        }
    },
    {
        timestamps:true
    }
);

module.exports=mongoose.model('User',userModel);