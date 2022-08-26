module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', 
    {
      postId:DataTypes.INTEGER ,
      categoryId: DataTypes.INTEGER,
    },
    { timestamps: false },
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'blogposts',
      through: PostCategory,
      foreignKey: 'id',
      otherKey: 'id',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'id',
      otherKey: 'id',
      // foreignKey sempre se refere ao model em
      //que chamamos belongsToMany, enquanto otherKey se refere ao model com o qual estamos criando a associação
    });
  };

  return PostCategory;
};