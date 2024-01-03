const client = require('./connection.js')
const express = require('express');
const app = express();

app.listen(3300, () => {
    console.log("Sever is now listening at port 3300");
})

client.connect();

//get all user data from temporary_user_data table
app.get('/user', (req, res) => {
    client.query(`Select * from users`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
    });
    client.end;
})
//get named ID user data from temporary_user_data table
app.get('/user/:uid', (req, res) => {
    client.query(`Select * from users where uid=${req.params.uid}`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
    });
    client.end;
})

//send new user data to temporary_user_data table
//at the situation we are using only this below api point.
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/user', (req, res) => {
    const user = req.body;
    let insertQuery = `insert into users(
        email,
        password,
        first_name,
        last_name, 
        nic, 
        gender, 
        dob, 
        mobile_number, 
        address_line1, 
        address_line2,
        address_city, 
        address_district, 
        address_postalcode
        ) 
        values(
            '${user.email}', 
            '${user.user_password}',
            '${user.first_name}', 
            '${user.last_name}',
            '${user.nic}',
            '${user.gender}',
            '${user.birth_date}',
            '${user.mnumber}',
            '${user.address.line1}',    
            '${user.address.line2}',  
            '${user.address.city}',     
            '${user.address.district}', 
            '${user.address.postalCode}'
            )`

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Insertion was successful')
        }
        else { console.log(err.message) }
    })
    client.end;
})