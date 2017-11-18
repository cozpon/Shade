module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    username: {type: DataTypes.STRING, allowNull: false},
    points: {type: DataTypes.INTEGER},
    emoji_id: {type: DataTypes.INTEGER},
    status_id: {type: DataTypes.INTEGER}
  }, {
    tableName: 'users'
  });

  User.associate = function (models) {
    User.belongsTo(models.Emoji, {
      foreignKey: 'emoji_id',
      as: 'emoji'
    });
    User.belongsTo(models.Status, {
      foreignKey: 'status_id',
      as: 'status'
    });
  }

  return User
}