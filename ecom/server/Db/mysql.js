const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ecommerce_orders"
});

db.connect(err => {
  if(err) throw err;
  console.log("MySQL Connected");
});

module.exports = db;



// CREATE DATABASE ecommerce_orders;

// USE ecommerce_orders;

// CREATE TABLE orders (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     customer_name VARCHAR(100),
//     total DECIMAL(10,2)
// );

