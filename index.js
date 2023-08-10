

const http = require('http')
const fs = require('fs')
const { isUtf8 } = require('buffer')

// server creation
const server = http.createServer((req, res)=>{    
   let filename = new Date().toLocaleDateString().split('/').join('-')+'-'+new Date().toLocaleTimeString().split(':').join('-');                               
   res.writeHead(200,{"Content-type":"application/json"})                   
//    res.end(JSON.stringify({
//        title: "NodeJS",
//        content: "my first API rafi mohamed"
//    }))
fs.writeFile(`files/${filename}.txt`, `Time is - ${new Date().toTimeString()}`, 'utf-8', ()=>{

   fs.readFile(`files/${filename}.txt`, 'utf-8', (error, data)=>{
      if (error)
      console.log(error)
       else 
       res.end(data)

   })
})
     

})

// Activate server
server.listen(8000, ()=>console.log('server is listening port 8000'))





