const express = require('express')

const app = express()


app.set('view engine', 'ejs')


app.use( express.static('public'))

app.get('/', (req,res) =>{
    res.render('./droid.ejs',{title:'Home'})
})

app.get('/about', (req,res) =>{
    res.render('./about.ejs',{title:'About'} )
})
app.get('/text', (req,res) =>{
    res.render('./text.ejs',{title:'Text-to-Speech'})
})
app.get('/speech', (req,res) =>{
    res.render('./speech.ejs',{title:'Speech-Recognition'})
})

app.use((req, res) =>{
    res.status(404).render('./404.ejs', {title: 'Not Found'})
})







app.listen(3000)













// app.get('/', (req,res) =>{
//     res.sendFile('./droid.html', {root: __dirname})
// })
// app.get('/about', (req,res) =>{
//     res.sendFile('./about.html', {root: __dirname})
// })
// app.get('/speech', (req,res) =>{
//     res.sendFile('./speech.html', {root: __dirname})
// })
// app.get('/text', (req,res) =>{
//     res.sendFile('./text.html', {root: __dirname})
// })

// app.use((req, res) =>{
//     res.status(404).sendFile('./404.html' , {root: __dirname})
// })






// const fs = require('fs')
// const os = require('os')
// const http = require('http')

// let path = './'




// const server = http.createServer((req, res) =>{
//     // console.log('server created')
//     console.log(req.url)
//     res.setHeader('content-type', 'text/html')

//     switch (req.url) {
//         case '/':
//             path = './droid.html'
            
//             break;
//         case '/about':
//             path = './about.html'
            
//             break;
//         case '/speech':
//             path = './speech.html'
            
//             break;
//         case '/text':
//             path = './text.html'
            
//             break;
    
//         default:
//             path = './404.html'
//             break;
//     }

//     fs.readFile(path, (err,data) =>{
//         if (err) {
//             // console.log(err)
//             res.end()
//         }else{
//             res.write(data)
//             res.end()
//         }
//         // console.log(data)
//         console.log(path)
//     })
// })



// server.listen(3000, 'localhost', () =>{
//     console.log('listening...')
// })