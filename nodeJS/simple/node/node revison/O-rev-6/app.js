let fs = require('fs');
const  inp = process.argv;
 
if(inp[2]=='add'){

      fs.writeFileSync(inp[3],inp[4]);
}else if(inp[2]=='remove'){
       fs.unlinkSync(inp[3]);          
}else{
      console.log("invalid input");
}

