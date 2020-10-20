//Install express server
const express = require('express');
const path = require('path');

const app = express();

// redirect to https if http
app.use((req, res, next) => {
    if(req.header("x-forwarded-proto") !== "https") {
        console.log("Received protocol: " + req.header("x-forwarded-proto"));
        console.log("Redirecting to: https://" + req.header("host"));
        res.redirect(`https://${req.header('host')}`)
    } else {
        next()
    }
})

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/personalWebsite'));


app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/personalWebsite/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);