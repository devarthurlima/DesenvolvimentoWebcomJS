import Cursocard from "../../componentes/CursoCard";
import CursoConteiner from "../../componentes/CursoConteiner";

function Cursos() {
  const cursos = [
    {
      titulo: "JavaScript",
      foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/960px-JavaScript-logo.png",
      duracao: "120",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit,voluptatibus Vel ea veritatis provident modi quam officiis.",
    },
    {
      titulo: "Java",
      foto: "https://cdn.worldvectorlogo.com/logos/java.svg",
      duracao: "120",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit,voluptatibus Vel ea veritatis provident modi quam officiis.",
    },
    {
      titulo: "PHP",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThHcu9F9xg4H7sH3bo8W5nL8XTIWzzjsKZ59oxJ-giLw&s=10",
      duracao: "60",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit,voluptatibus Vel ea veritatis provident modi quam officiis.",
    },
    {
      titulo: "Python",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1F4dmI5txw2qmR_FlmspoMGO4IuZcGNRodQJ7lfn6tw&s",
      duracao: "60",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit,voluptatibus Vel ea veritatis provident modi quam officiis.",
    },
  ];

  return (
    <>
      <CursoConteiner>
        {cursos.map(({ titulo, foto, duracao, descricao }) => (
          <Cursocard
            titulo={titulo}
            foto={foto}
            duracao={duracao}
            descricao={descricao}
          />
        ))}
      </CursoConteiner>
    </>
  );
}

export default Cursos;
