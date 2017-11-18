module.exports = function (sequelize, DataTypes) {
  const Role = sequelize.define('role', {
    role: {type: DataTypes.STRING}
  }, {
    tableName: 'roles',
    timestamps: false
  });

  Role.associate = function (models) {
    Role.hasMany(models.user, {
      foreignKey: 'role_id',
      as: 'role'
    });
  }

  return Role;
}