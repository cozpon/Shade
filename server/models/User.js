module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('user', {
    username: {type: DataTypes.STRING, allowNull: false},
    points: {type: DataTypes.INTEGER, defaultValue: 0},
    emoji_id: {type: DataTypes.INTEGER, allowNull: false},
    status_id: {type: DataTypes.INTEGER, defaultValue: 1},
    deletedAt: {type: DataTypes.DATEONLY, defaultValue: null}
  }, {
    tableName: 'users'
  });

  User.associate = function (models) {
    User.belongsTo(models.emoji, {
      foreignKey: 'emoji_id',
      as: 'emoji'
    });
    User.belongsTo(models.status, {
      foreignKey: 'status_id',
      as: 'status'
    });
    User.hasMany(models.message, {
      foreignKey: 'shader_id',
      as: 'shader'
    });
    User.hasMany(models.message, {
      foreignKey: 'victim_id',
      as: 'victim'
    });
  }

  return User
}