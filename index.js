const miniExpress = require('./mini-express');

const app = miniExpress();

app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});
  
app.get('/', (req, res) => {
    // res.send('Hello World!');
    res.end('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

