module.exports = (sequelize, Sequelize) => {
	var  model = {};
	model.Customer = sequelize.define('customer', {
	  firstname: {
			type: Sequelize.STRING
	  },
	  lastname: {
			type: Sequelize.STRING
	  },
	  age: {
		  type: Sequelize.INTEGER
	  }
	});

	model.Users = sequelize.define('Users', {
	  name: {
			type: Sequelize.STRING
	  },
	  last_name: {
			type: Sequelize.STRING
		},
		document: {
			type: Sequelize.STRING
		}
	});
	
	return model;
}