const express = require('express');
const app = express()
const cors = require('cors')

const PORT=process.env.PORT || 4000

app.use(express.json());
app.use(cors());

app.get('/ping',(req,res)=>{
    res.send('server is on')
})
app.listen(PORT, () => {
    console.log(`your server has been started on port ${PORT}`)
})
