let express = require('express');
const app = express();
const port = 4500;

app.set('view engine','ejs')
app.get("/",(req,res)=>{
    const user = {
         title : 'Hello',
         dic : "How are you",
         age:19
    }
    // res.render('index',user);
    res.render('index',user);
})
app.listen(port,()=>{
    console.log('server is running '+port);
})
