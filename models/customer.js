// The Database Model of a customer. This object is a Sequelize representation of the 
// customers table

module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    name: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a todo from being entered if it doesn't
      // have a text value
      allowNull: false,
      // len is a validation that checks that our todo is between 1 and 140 characters
      validate: {
        len: [1, 140]
      }
    }
  });

  // Customer can have many burgers
  Customer.associate = function(models) {
    // Associating Customer with Burger
    // When a Customer is deleted, also delete any associated Burgers
    Customer.hasMany(models.Burger, {
      onDelete: "cascade"
    });
  };

  return Customer;
};
