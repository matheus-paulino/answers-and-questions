const express = require("express")
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Set engine EJS
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render('index')
})

app.get('/question', (req, res) => {
    res.render('questions/question')
})

app.post('/question', (req, res) => {
    let title = req.body.title
    let description = req.body.description

    res.send({title, description})
})

app.listen(8080, () => {
    console.log('App Running!')
})