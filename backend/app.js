const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3001;

app.get('/test', (req, res) => {
    if(req.query.user == 'admin' && req.query.pass == 'abc123')
        res.status(200).json({'authenticated':true,'name':'Big Kahoona'});
    else
        res.status(200).json({'authenticated':false});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));