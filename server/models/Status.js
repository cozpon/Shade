module.exports = function (sequelize, DataTypes) {
  const Status = sequelize.define('status', {
    name: {type: DataTypes.STRING}
  }, {
    tableName: 'statuses',
    timestamps: false
  });

  Status.associate = function (models) {
    Status.hasMany(models.user, {
      foreignKey: 'status_id',
      as: 'status'
    });
    Status.hasMany(models.message, {
      foreignKey: 'status_id',
      as: 'status'
    });
  }

  return Status;
}