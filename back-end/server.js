const express = require('express');
const app = express();
const path = require('path');
const port = 3000;


app.use(express.static('public'));
app.use(express.static('files'));
/*
* Default route for the web app
*/
app.get('/', (req, res) => res.send('Welcome To Code Handbook!'))

/*
* Route to render HTML Page
*/
app.get('/renderHTML', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript');
    res.sendFile('index.html', {
        root: path.join(__dirname, '/../front_end/')
    })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))