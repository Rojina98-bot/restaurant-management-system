
import { Sequelize,DataTypes} from 'sequelize';
import config from '../config/dbconfig.js';
const sequelize=new Sequelize(config.DB,config.USER,config.PASSWORD,{
    host:config.HOST,
    dialect:config.dialect,
});
const User=sequelize.define('User',{


    UserID:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    UserName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    UserAddress:{
        type:DataTypes.STRING,
        allowNull:false
    },
    UserNumber:{
        type:DataTypes.STRING,
        allowNull:false
    },
    UserEmail:{
        type:DataTypes.STRING,
        allowNull:false
    }
    , UserPassword:{
        type:DataTypes.STRING,
        allowNull:false
    },
    isAdmin:{
        type:DataTypes.BOOLEAN
    }

    
},{
    timestamps:true
});
await User.sync();
export default User;