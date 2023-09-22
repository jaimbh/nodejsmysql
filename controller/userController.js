const User = require("../models/userModels");
const db = require("../config");

function tableExists(){
	const createTableQuery = `
		CREATE TABLE IF NOT EXISTS user (
		  id INT AUTO_INCREMENT PRIMARY KEY,
		  name VARCHAR(255),
		  phone VARCHAR(20),
		  email VARCHAR(255),
		  sex VARCHAR(255)
		)
	`;
  
	db.query(createTableQuery, (err, results) => {
		if (err) {
			console.error("Error creating 'user' table:", err);
			return;
		}
	});
}

exports.getUsers = async (req, res) => {
	await tableExists();
	
	db.query('SELECT * FROM `user`', function(err, results, fields) {
		if(err){
			console.error(err);
			return;
		}
		
		res.json(results); // results contains rows returned by server
	});
}

exports.registerUser = async (req, res) => {
	await tableExists();
	
	const newUser = {
		id: req.body.id,
		name: req.body.name,
		phone: req.body.phone,
		email: req.body.email,
		sex: req.body.sex
	};

	await User.create(newUser, (err, user) => {
		if (err) {
		    res.status(500).json({ error: "Failed to register user" });
		    return;
		}
		
		res.status(201).json(user);
	});
};
