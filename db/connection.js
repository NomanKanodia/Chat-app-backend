const mongoose = require('mongoose');

const url= `mongodb+srv://nomankanodia:nk123456@cluster0.tgcpalh.mongodb.net/?retryWrites=true&w=majority`;


mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))