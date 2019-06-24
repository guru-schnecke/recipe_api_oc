const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 4000 //4000 or server environment port
const mongoConfig = require('./config/mongoconnect')

app.use(cors()) //cors error catcher
app.use(express.json()) //recieve json since bodyparser is now part of express

mongoConfig() //db connect

app.use('/api/recipes', require('./routes/recipe.routes'))

app.get('*', (request, response)=>{
 response.status(404).json({ message : "Sorry: Url Doesn't Exit"})
})

//start server 
app.listen(PORT,() => console.log(`Live on ${PORT}`) )