require('dotenv').config()
const app = require('./app');
const mongoose = require("mongoose");
const port = 8000;



mongoose.connect(process.env.MONGO_URL,{dbName: 'Ecommerce'}).then(() => {
    console.log('database connected successfully!')
}).catch((err) => {
    console.log(err)
})




app.listen(port, () => {
    console.log('server connected successfully!')
})




