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
  response.send('ok')
})


//绑定端口监听
app.listen(3000,(err)=>{
  if(!err){
    console.log('必须用编译器打开页面!!!，从而制造跨域问题')
  }
})