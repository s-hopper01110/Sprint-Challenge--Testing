//server-side testing 

const express = require('express');
const helmet = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ message: 'SC working' });
});


//GET
server.get('/games', (req, res) => {
    res.status(200).json(data)
        
})

//POST
server.post('/games', (req,res) => {
    const { id, title, releaseYear} = req.body
    
    if(!id || !title || !releaseYear) {
        res.status(422).json(false)
    } else{
        res.status(201).json(true)
    }
})
let data = [
    {id: 1, title:'Donkey Kong', releaseYear:'1981'},
    {id: 2, title:'Sonic', releaseYear:'1991'},
    {id: 3, title:'Pac-Man', releaseYear:'1980'},

]

module.exports = server;