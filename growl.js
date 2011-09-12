var growl = require('growl');
var sys = require('sys');
var http = require('http');

//growl.binVersion(function(err, version){
//      console.log(version);
//});
var data = '';
var server = http.createServer(function(req, res) {
    res.statusCode = 200;
    req.on('data', function(chunk) { data += chunk; });
    req.on('end', function() {
        console.log('got here with data: ' + data);
        growl.notify(data, {title: 'Locker Project'});
        res.end();
    });
    req.on('error', function(err) { console.error(err); res.end(); });
});
server.listen(9987);
sys.puts("Locker growl notifier running at http://localhost:9987");
