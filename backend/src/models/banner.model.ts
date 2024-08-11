import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db";

interface IBannerAttributes {
  id: number;
  description: string;
  visibility: boolean;
  timer: number;
  link?: string;
  imageUrl: string;
}

interface IBannerCreationAttributes extends Optional<IBannerAttributes, "id"> {}

const BannerModel = sequelize.define<
  Model<IBannerAttributes, IBannerCreationAttributes>
>("Banner", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
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
