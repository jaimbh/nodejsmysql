const mysql = require("mysql2");

// create the connection to the MySQL server
const db = mysql.createConnection({
	host: 'localhost',
	database: 'aa_db',
	user: 'aa_user',
	password: 'Test@1234'
});

db.connect((err) => {
	if (err) {
		console.error("Database connection failed:", err);
		return;
	}
	
	console.log("Database connected");
});

module.exports = db;
