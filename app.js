var faker = require('faker');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'aileenyang94',
    database : 'join_us'
});

// SELECTING DATA
// var q = 'SELECT COUNT(*) AS total FROM users';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results[0].total);
// });

// INSERTING DATA
// var q = 'INSERT INTO users (email) VALUES ("rusty_the_dog@gmail.com")';

// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });



// INSERTING DATA TAKE 2    
// var person = {
//     email: faker.internet.email(),
//     created_at: faker.date.past()
// };

// connection.query('INSERT INTO users SET ?', person, function(error, result) {
//     if (error) throw error;
//     console.log(result);
// });



// ======= INSERTING LOTS OF DATA ========
var data = [];
for (var i = 0; i < 500; i++) {
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}

var q = 'INSERT INTO users(email, created_at) VALUES ?';

connection.query(q, [data], function(error, result) {
    console.log(error);
    console.log(result);
});


connection.end();




//aileenyang94