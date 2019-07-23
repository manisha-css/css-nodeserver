module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      givenName: {
        type: DataTypes.STRING,
        field: 'givenname'
      },
      userName: {
        type: DataTypes.STRING,
        field: 'username'
      },
      userPassword: {
        type: DataTypes.STRING,
        field: 'password'
      },
      verificationCode: DataTypes.STRING,
      accountLocked: DataTypes.BOOLEAN,
      publicProfile: DataTypes.STRING
    },
    {
      underscored: true
    }
  );
  User.associate = models => {
    User.hasMany(models.UserRole, { foreignKey: 'user_id', as: 'roles' });
  };

  return User;
};
