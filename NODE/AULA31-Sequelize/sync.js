import sequelize from "./config/database.js";
import Cliente from "./models/clienteModel.js";

await sequelize.authenticate();

await Cliente.sync();

console.log("Tabela clientes sincronizada");

process.exit(0);
