// sequelize is a library that allows us to connect to a database,
// and it's the same library that we use to create models.
const { Model, DataTypes } = require("sequelize");

// bcrypt is a library that allows us to hash passwords
const bcrypt = require("bcrypt");

// sequelize (lowercase) references our connection to the DB.
const sequelize = require("../config/connection");

// create our User model
class User extends Model {
	// set up method to run on instance data (per user) to check password
	checkPassword(loginPw) {
		return bcrypt.compareSync(loginPw, this.password);
	}
}

/*
	>>> user class diagram
	+-----------------+------------------+------+-----+---------+----------------+
	| Field           | Type             | Null | Key | Default | Extra          |
	+-----------------+------------------+------+-----+---------+----------------+
	| id              | int(11) unsigned | NO   | PRI | NULL    | auto_increment |
	| fname           | varchar(255)     | NO   |     | NULL    |                |
	| lname           | varchar(255)     | NO   |     | NULL    |                |
	| image           | varchar(255)     | YES  |     | NULL    |                |
	| username        | varchar(255)     | NO   | UNI | NULL    |                |
	| email           | varchar(255)     | NO   | UNI | NULL    |                |
	| password        | varchar(255)     | NO   |     | NULL    |                |
	| createdAt       | datetime         | NO   |     | NULL    |                |
	| updatedAt       | datetime         | NO   |     | NULL    |                |
	+-----------------+------------------+------+-----+---------+----------------+
*/


User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		fname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		image: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [6],
			},
		},
		isAdmin: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
	},
	{
		// hooks are automatic methods that run during various phases of the User Model lifecycle
		hooks: {
			// set up beforeCreate lifecycle "hook" functionality, which will run before a new User is created and saved to the database
			async beforeCreate(newUserData) {
				newUserData.password = await bcrypt.hash(newUserData.password, 10);
				return newUserData;
			},

			// set up beforeUpdate lifecycle "hook" functionality, which will run before an existing User is updated and saved to the database
			async beforeUpdate(updatedUserData) {
				updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
				return updatedUserData;
			}
		},

		sequelize,
		timestamps: false,              // don't automatically create createdAt/updatedAt timestamp fields
		freezeTableName: true,          // don't pluralize name of database table
		underscored: true,              // use underscores instead of camel-casing 
		modelName: "user",              // make it so our model name stays lowercase in the database
	}
);

module.exports = User;
