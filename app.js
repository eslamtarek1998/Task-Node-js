const express=require('express')
const app=express()
var path = require('path');


const port=3000

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

const hbs=require('hbs')
const partialPath=path.join(__dirname,'./views/partial')
hbs.registerPartials(partialPath)

app.get('/',(req,res,next)=>{
    res.render('index',{
        title:'This is Home Page'
    })
})

app.get('/about',(req,res,next)=>{
    res.render('about',{
        title:'This is About Page',
        name:'Mahmoud',
        city:'zayed',
        age:40
    })
})

app.get('/contact',(req,res,next)=>{
    res.render('contact',{
        title:'This is Contact Page',
        name:'Eslam',
        city:'Maadi',
        age:25
    })
})

app.get('/prices',(req,res,next)=>{
    res.render('prices',{
        title:'This is Prices Page',
        name:'Ahmed',
        city:'Giza',
        age:30
    })
})

app.get('/service',(req,res,next)=>{
    res.render('service',{
        title:'This is Service Page',
        name:'Ali',
        city:'Zamalk',
        age:35
    })
})

app.listen(port,()=>console.log('server is listning now...'))
