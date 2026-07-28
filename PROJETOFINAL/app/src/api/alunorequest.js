import api from "./api";

export const retornarAlunos = () => api.get("/alunos");
export const retornarAlunoPorId = (id) => api.get(`/alunos/${id}`);
export const adicionarAlunos = (aluno) => api.post("/alunos", aluno);
export const atualizarAluno = (aluno) => api.put(`/alunos/${aluno.id}`, aluno);
export const removerAluno = (id) => api.delete(`/alunos/${id}`);
