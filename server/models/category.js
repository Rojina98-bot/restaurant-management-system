import {Sequelize, DataTypes} from 'sequelize';
import config from "../config/dbconfig.js";
const sequelize=new Sequelize(config.DB,config.USER,config.PASSWORD,{
    host:config.HOST,
    dialect:config.dialect,
});
const Category=sequelize.define('Category',{


    CategoryID:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    CategoryName:{
        type:DataTypes.STRING,
        allowNull:false
    }

    
},{
    timestamps:true
});
await Category.sync();
export default Category;