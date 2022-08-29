module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,

  },
  {
    timestamps: false,
    tableName: 'Users',
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost,
      { foreignKey: 'userId', as: 'blogposts' }); // dentro da chave foreingKey eu coloco
      // o nome da chave estrangeira que está na tabela BlogPosts. E o mesmo nome que eu 
      // coloco no model BlogPost, dentro do associate.
      // o nome da foreingKey TEM QUE SER IGUAL
  };

  return User;
};