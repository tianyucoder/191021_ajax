//引入express
const express = require('express')
//实例化一个app应用对象
const app = express()
//使用中间件暴露静态资源
app.use(express.static(__dirname+'/public'))


//配置路由
app.get('/demo',(request,response)=>{
  console.log('有人发来了get请求了，携带的参数是：',request.query)
  let cars = [{name:'马自达阿特兹',price:200000},{name:'奔驰c63-AMG',price:600000}]
  response.send(cars)
})

//绑定端口监听
app.listen(3000,(err)=>{
  if(!err){
    console.log('兄弟不要用编译器打开页面')
    console.log('练习原生js发送get请求的地址是：http://localhost:3000/ajax_get.html')
  }
})