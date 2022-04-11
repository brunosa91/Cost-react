import ProjectForm from "../project/ProjectForm";
import styles from "./NewProject.module.css";
import { useNavigate } from "react-router-dom";

function NewProject() {
  const history = useNavigate();
  function createPost(project) {
    //initialize cost and services
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        //redirect
        history("/projects", {
          state: { message: "projeto criado com sucesso" },
        });
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className={styles.newproject_container}>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar o serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
}

export default NewProject;
