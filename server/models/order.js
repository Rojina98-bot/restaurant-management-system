import {Sequelize, DataTypes} from 'sequelize';
import config from "../config/dbconfig.js";
import User from './users.js';
const sequelize=new Sequelize(config.DB,config.USER,config.PASSWORD,{
    host:config.HOST,
    dialect:config.dialect,
});
const Order=sequelize.define('Order',{


    OrderID:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    OrderStatus:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    TotalPrice:{
        type:DataTypes.INTEGER,
        allowNull:false
    }

    
},{
    timestamps:true
});
/*const UserOrder=sequelize.define('UserOrder',{
    quantity:DataTypes.INTEGER
});*/
/*const UserOrder = sequelize.define('UserOrder', {
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: User, 
        key: 'UserID'
      }
    },
    OrderId: {
      type: DataTypes.INTEGER,
      references: {
        model: Order, 
       key: 'OrderID'
      }
    }
  });*/
  const UserOrder = sequelize.define('UserOrder', {},{timestamps:true}
  );
Order.belongsToMany(User,{through:'UserOrder',
as:"Order",foreignKey:"OrderId"});
User.belongsToMany(Order,{through:'UserOrder',
as:"User",foreignKey:"UserId"});

await Order.sync();
await UserOrder.sync();
//await UserOrder.sync();
export default Order;
export {UserOrder};