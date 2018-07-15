// Database Configuration
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: false,
});

// Conenct
sequelize
    .authenticate()
    .then(() => {
        console.log('Database - Success.');
    })
    .catch(err => {
        console.log('Database - Fail')
        console.error(err);
    });

// User Mode;
const User = sequelize.define('user', {
    login: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
			len: [1, 64]
		}
    },
    email: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
            isEmail: true,
			notEmpty: true,
			len: [1, 255]
		}
    },
    password_digest: {
		type: Sequelize.STRING,
		validate: {
			notEmpty: true
		}
	},
	password: {
		type: Sequelize.VIRTUAL,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	password_confirmation: {
		type: Sequelize.VIRTUAL
	},
    role: {
		type: Sequelize.ENUM('user', 'moderator', 'owner'),
	},
    level: {
		type: Sequelize.INTEGER,
		validate: {
			len: [1, 4]
		}
	},
    experience: {
		type: Sequelize.INTEGER,
		validate: {
			len: [1, 16]
		}
	},
    score: {
		type: Sequelize.INTEGER,
		validate: {
			len: [1, 16]
		}
	},
    currency: {
		type: Sequelize.INTEGER,
		validate: {
			len: [1, 16]
		}
	},
});

sequelize.sync();

module.exports = sequelize;