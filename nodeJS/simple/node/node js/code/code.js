let express = require('express');
const app = express();
const port = 8900;
app.set('view engine','ejs');



app.get("/",async(req,res)=>{
    const user =[
        {
           name:'harkhani Chintan',
            age: 19,
            Study: 'BCA',
            Rollnumber:76
        },
        {
            name:'Ram Vora',
             age: 15,
             Study: 'BA.c',
             Rollnumber:34
         },
         {
            name:'Mayank Nakarni',
             age: 27,
             Study: 'MAC',
             Rollnumber:56
         }
    ]
    res.render('code',{user})
})
app.listen(port,()=>{
    console.log('Server is running .... At port = '+port);
})
