module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Article', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    author: DataTypes.STRING,
    content: DataTypes.STRING,
    likes: DataTypes.INTEGER,
    type: DataTypes.STRING,
    key: DataTypes.STRING
  });
};
