import sequelize from "./src/config/database.js";
import Aluno from "./src/models/Aluno.js";

await sequelize.authenticate();
await Aluno.sync();
console.log("Tabela alunos sincronizada");
process.exit(0);
