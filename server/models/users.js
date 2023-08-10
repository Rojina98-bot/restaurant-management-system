
import { Sequelize,Model,DataTypes} from 'sequelize';
import config from '../config/dbconfig.js';
const sequelize=new Sequelize(config.DB,config.USER,config.PASSWORD,{
    host:config.HOST,
    dialect:config.dialect,
});
const User=sequelize.define('User',{


    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false
    },
    number:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    }
    , password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    isAdmin:{
        type:DataTypes.BOOLEAN
    }

    
});
await User.sync();
export default User;