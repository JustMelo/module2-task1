export default function ProjectList ( {projects} ) {

  const projectsList = [];

    projects.forEach((elem, index) => {
      projectsList.push(
          <img className="project-img" src={elem.img} alt={elem.category} key={index}/>
      )
    });

  return (
    <div className="list">
      {projectsList}
    </div>
  );
}