var my = require('my');

var connection = my.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: 'copedb'
});
connection.connect();
var cope = {
    author: 'XYZXYZ',
    title: 'Testing Node',
    body: 'Node JS'
};
var query = connection.query('insert into cope set ?', cope, function(
    err,
    result
) {
    if (err) {
        console.error(err);
        return;
    }
    console.error(result);
});
