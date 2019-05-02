// The Database Model of a burger. This object is a Sequelize representation of the 
// burgers table

module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a todo from being entered if it doesn't
      // have a text value
      allowNull: false,
      // len is a validation that checks that our todo is between 1 and 140 characters
      validate: {
        len: [1, 140]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      // defaultValue is a flag that defaults a new todos complete value to false if
      // it isn't supplied one
      defaultValue: false
    }
  });

  // This is how we create a foriegn key, every burger has a customer
  Burger.associate = function (models) {
    // We're saying that a Burger should belong to an Customer
    // A Burger can't be created without an Customer due to the foreign key constraint
    Burger.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Burger;
};
