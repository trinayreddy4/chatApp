const mongoose=require('mongoose');

const messageModel=mongoose.Schema(
    {
        content:{
            type:String,
            trim:true
        },
        sender:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
        chat:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Chats'
        }
    }
    ,
    {
        timestamps:true
    }
);

module.exports=mongoose.model('Message',messageModel);