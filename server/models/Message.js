module.exports = function (sequelize, DataTypes) {

  const Message = sequelize.define('message', {
    body: {type: DataTypes.STRING},
    points: {type: DataTypes.INTEGER},
    media: {type: DataTypes.STRING},
    shader_id: {type: DataTypes.INTEGER, allowNull: false},
    victim_id: {type: DataTypes.INTEGER},
    status_id: {type: DataTypes.INTEGER}
  }, {
    tableName: 'messages'
  });

  Message.associate = function (models) {
    Message.belongsTo(models.user, {
      foreignKey: 'shader_id',
      as: 'shader'
    });
    Message.belongsTo(models.user, {
      foreignKey: 'victim_id',
      as: 'victim'
    });
    Message.belongsTo(models.status, {
      foreignKey: 'status_id',
      as: 'status'
    });
  }

  return Message;
}