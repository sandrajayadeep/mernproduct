const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sandrajayadeep01:sandrajayadeep@cluster0.ubvgsde.mongodb.net/product')
.then(()=>(
    console.log('Connected to MongoDB')
))
    .catch(err => ( 
        console.log(err)
    ))