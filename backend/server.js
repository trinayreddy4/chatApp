const express=require('express');
const app=express();
const cors=require('cors');
const dotenv=require('dotenv');
const chats=require('./chats');
//environmental config
dotenv.config();

//port config
const port=process.env.PORT||5000;

//cors config
app.use(cors())


//sever config
app.listen(port,()=>{
    console.log(`Server started @${port}` );
})

app.get('/api/chats',(req,res)=>{
    res.status(200).send(chats);
})

app.get('/api/chats/:id',(req,res)=>{
    const chatid=req.params.id;
    const chat=chats.find((c)=>c._id===chatid);

    if(isNaN(chat))
    {
        res.status(200).send(chat);
    }
    else
    {
        res.status(404).send("Not found");
    }
})