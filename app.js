var express =  require('express')
var app = express()

app.set('view engine', 'ejs')


var routes = require('./routes/index')

// var path = require('path')
// app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static('./public'))
//Routes

//home
app.get('/', routes.home)

//single movie
app.get('/episode/:id', routes.movieSingle)

//not found
app.get('*', routes.notFound)

app.listen(process.env.PORT || 3000)