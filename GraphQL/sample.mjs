// import Express  from 'express';
import express from 'express';

const app = express()

app.get('/', (req, res) => {
    res.send('hello daw')
})
app.get('/aba', (req, res) => {
    res.send('aba pano un')
})

app.listen(3000, () => {
    console.log('the port is running at 3000')
})





