import {Sequelize, DataTypes} from 'sequelize';
import config from "../config/dbconfig.js";
import Category from './category.js';
const sequelize=new Sequelize(config.DB,config.USER,config.PASSWORD,{
    host:config.HOST,
    dialect:config.dialect,
});
const Menu=sequelize.define('Menu',{


    MenuID:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true 
    },
    MenuName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    MenuPrice:{
        type:DataTypes.STRING,
        allowNull:false
    }

    
},{
    timestamps:true
});
Category.hasMany(Menu,{
    foreignKey: 'category_id'
});
Menu.belongsTo(Category,{
    foreignKey: 'category_id'
});
await Menu.sync();
export default Menu;