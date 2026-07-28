import { Sequelize } from 'sequelize' 

const sequelize = new Sequelize( 
    'projetofinal', 
    'root', 
    '1472',  
    { 
        host: 'localhost', 
        port: 3306 || 3306, 
        dialect: 'mysql', 
        logging: true, 
        define: { 
            timestamps: false, 
            underscored: true, 
            freezeTableName: true, },   } ) 

export default sequelize;