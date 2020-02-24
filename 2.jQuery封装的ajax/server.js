//引入express
const express = require('express')
//实例化一个app应用对象
const app = express()
//使用中间件暴露静态资源
app.use(express.static(__dirname+'/public'))
//使用express内置的中间件,用于解析请求体中以urlencoded形式编码的参数。
//解析的结果为一个对象，随后把解析完的这个对象挂载到了request对象的body属性上。
app.use(express.urlencoded({extended:true}))
//使用express内置的中间件,用于解析请求体中以json形式编码的参数。
//解析的结果为一个对象，随后把解析完的这个对象挂载到了request对象的body属性上。
app.use(express.json())


//配置路由
app.get('/demo',(request,response)=>{
  console.log('有人发来了get请求了，携带的参数是：',request.query)
  let cars = [{name:'马自达阿特兹',price:200000},{name:'奔驰c63-AMG',price:600000}]
  response.send(cars)
})

app.post('/demo2',(request,response)=>{
  console.log('有人发来了post请求了，携带的参数是：',request.body)
  let films = [{name:'囧妈',starts:4.5},{name:'中国女排',starts:5.0}]
  response.send(films)
})

//绑定端口监听
app.listen(3000,(err)=>{
  if(!err){
    console.log('兄弟不要用编译器打开页面')
    console.log('练习jQuery封装的ajax的地址是：http://localhost:3000/jQuery-ajax.html')
  }
})