import {Sequelize, DataTypes} from 'sequelize';
import config from "../config/dbconfig.js";
import Order from './order.js';
const sequelize=new Sequelize(config.DB,config.USER,config.PASSWORD,{
    host:config.HOST,
    dialect:config.dialect,
});
const OrderItem=sequelize.define('OrderItem',{


    OrderItemID:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    OrderName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    OrderQuantity:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    OrderPrice:{
        type:DataTypes.INTEGER,
        allowNull:false

    },
    SubTotal:{
        type:DataTypes.INTEGER,
        allowNull:false
    }

    
},{
    timestamps:true
});
Order.hasMany(OrderItem,{
    foreignKey: 'orderId'
},{
    onDelete:'CASCADE'
});
OrderItem.belongsTo(Order,{
    foreignKey:'orderId',
},{
    onDelete:'CASCADE'
});


await OrderItem.sync();
export default OrderItem;