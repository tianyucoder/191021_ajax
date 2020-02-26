const express = require('express')
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get('/demo',(request,response)=>{
  console.log(request.query)
  let cars = [{name:'奥拓',price:3000},{name:'宝马',price:4000}]
  response.setHeader('Access-Control-Allow-Origin','*')
  response.send(cars)
})

app.post('/demo2',(request,response)=>{
  console.log(request.body)
  let cars = [{name:'奥拓',price:3000},{name:'宝马',price:4000}]
  response.setHeader('Access-Control-Allow-Origin','*')
  response.send(cars)
})

app.options('/demo2',(request,response)=>{
  console.log('嗅探了')
  response.setHeader('Access-Control-Allow-Origin','*')
  response.setHeader('Access-Control-Allow-Headers','*')
  response.send()
})


app.listen(3000,(err)=>{
  if(!err) console.log('server ok')
})