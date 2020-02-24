//引入express
const express = require('express')
//实例化一个app应用对象
const app = express()
//使用中间件暴露静态资源
app.use(express.static(__dirname+'/public'))
//使用express内置的中间件,用于解析请求体中以urlencoded形式编码的参数。
app.use(express.urlencoded({extended:true}))


//配置路由
app.get('/demo',(request,response)=>{
  //准备好一些要返回的数据
  let cars = [{name:'马自达阿特兹',price:200000},{name:'奔驰c63-AMG',price:600000}]
  response.setHeader('Access-Control-Allow-Origin','*')
  response.send(cars)
})


//绑定端口监听
app.listen(3000,(err)=>{
  if(!err){
    console.log('必须用编译器打开页面!!!，从而制造跨域问题')
  }
})