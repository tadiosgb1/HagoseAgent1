module.exports = (sequelize, Sequelize) => {
  const News1 = sequelize.define("News1", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: Sequelize.STRING },
    content: { type: Sequelize.STRING },
    image: { type: Sequelize.STRING },
    video: { type: Sequelize.STRING },
    category_id: { type: Sequelize.INTEGER, references: { model: "categories", key: "id" } },
    user_id: { type: Sequelize.INTEGER, references: { model: "users", key: "id" } },
    published_at: { type: Sequelize.DATE }
  }, {
    tableName: "new1s"
  });

  News1.associate = (db) => {
    News1.belongsTo(db.Category, { foreignKey: "category_id" });
    News1.belongsTo(db.User, { foreignKey: "user_id" });
  };

  return News1;
};