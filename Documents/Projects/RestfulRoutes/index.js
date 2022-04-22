const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid }= require('uuid');



app.use(express.urlencoded({ extended: true }))
app.use(express.json());


app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'ejs')

const comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'Hey Guys'

    },
    {
        id: uuid(),
        username: 'Victor',
        comment: 'I am new here'
    },

    {
        id: uuid(),
        username: 'Ope',
        comment: 'i be yoruba boy'
    },
    {
        id: uuid(),
        username: 'Emeka',
        comment: 'I be Igbo boy ooh'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index',
        {
            comments
        })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})
app.post('/comments', (req, res) => {
    const { username, comment } = req.body
    comments.push({ username, comment, id:uuid()})
    res.redirect('/comments');

})

app.get('/comments/:id' , (req, res)=> {
    const { id } = req.params;
   const comment = comments.find(c => c.id === parseInt(id) )
   res.render('comments/show', {comment})
})

app.get('/tacos', (req, res) => {
    res.send("Get /tacos response")
})
app.post('/tacos', (req, res) => {
    const { meat, qty }
        = (req.body);
    res.send(`Ok here, are your ${qty} ${meat}.`)
})



app.listen(3000, () => {
    console.log('Listening On Port 3000!');
})










