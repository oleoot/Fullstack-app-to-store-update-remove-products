const express = require('express');
const app = express()



app.get('/', (req, res) => {
    res.json({
        message: 'Hello world'
    })
})

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: req.app.get('env') === 'development' ? err.stack : {}
    });
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening at ${port}`)
})
