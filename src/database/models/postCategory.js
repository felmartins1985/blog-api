module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', 
    {
      postId:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        foreingKey:true,
      },
      categoryId: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        foreingKey:true,
      },
    },
    { timestamps: false },
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogposts',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      // foreignKey sempre se refere ao model em
      //que chamamos belongsToMany, enquanto otherKey se refere ao model com o qual estamos criando a associação
    });
  };

  return PostCategory;
};