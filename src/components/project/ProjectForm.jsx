import styles from "./ProjectForm.module.css";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import { useState, useEffect } from "react";
function ProjectForm({ handleSubmit, btnText, projecData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projecData || []);

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
    console.log(project);
  }

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
    console.log(project);
  }
  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        name="name"
        text="Nome do projeto"
        type="text"
        placeholder="Insira o nome do projeto"
        hadlerOnchange={handleChange}
        value={project.name ? project.name : ""}
      />

      <Input
        type="number"
        text="Orçamento do projeto"
        placeholder="Insira o orçamento total"
        name="budget"
        hadlerOnchange={handleChange}
        value={project.budget ? project.budget : ""}
      />

      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        hadlerCategory={handleChange}
        value={project.category ? project.category.id : ""}
      />

      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
