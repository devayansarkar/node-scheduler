var express = require('express')
var schedule = require('node-schedule')
var app = express()


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,POST")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next();
});
app.set('port', (process.env.PORT || 3000));


app.get('/', (req, res) => {
    res.send({
        'status': 'OK'
    })
});

schedule.scheduleJob('00 * * * *', function(fireDate){
    console.log('This job was supposed to run at ' + fireDate + ', but actually ran at ' + new Date());
});


app.listen(app.get('port'), () => {
    console.log('running on port', app.get('port'))
});