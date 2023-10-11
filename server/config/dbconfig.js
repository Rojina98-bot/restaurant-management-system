import dotenv from "dotenv";
dotenv.config();
/*const config={
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DATABASE,
    dialect:"mysql"
};*/
const config={
    HOST:"localhost",
    USER:"root",
    PASSWORD:"",
    DB:"restaurant management system",
    dialect:"mysql"
};
export default config;