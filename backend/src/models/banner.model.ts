import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const BannerModel = sequelize.define("Banner", {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  visibility: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  timer: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  link: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default BannerModel;
