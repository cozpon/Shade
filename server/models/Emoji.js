module.exports = function (sequelize, DataTypes) {
  const Emoji = sequelize.define('emoji', {
    emoji: {type: DataTypes.STRING}
  }, {
    tableName: 'emojis',
    timestamps: false
  });

  Emoji.associate = function (models) {
    Emoji.hasMany(models.user, {
      foreignKey: 'emoji_id',
      as: 'emoji'
    });
  }

  return Emoji;
}