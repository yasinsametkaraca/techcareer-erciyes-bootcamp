import React, {useState} from "react";

function ProjectSection() {

  const [projects, setProjects] = useState([
    {
      "title" : "Summer House",
      "image": "https://www.w3schools.com/w3images/house5.jpg"
    },
    {
      "title" : "Brick House",
      "image": "https://www.w3schools.com/w3images/house2.jpg"
    },
    {
      "title" : "Renovated",
      "image": "https://www.w3schools.com/w3images/house3.jpg"
    },
    {
      "title" : "Barn House",
      "image": "https://www.w3schools.com/w3images/house4.jpg"
    },
    {
      "title" : "Summer House",
      "image": "https://www.w3schools.com/w3images/house5.jpg"
    },
    {
      "title" : "Renovated",
      "image": "https://www.w3schools.com/w3images/house3.jpg"
    },
    {
      "title" : "Barn House",
      "image": "https://www.w3schools.com/w3images/house4.jpg"
    },
    {
      "title" : "Brick House",
      "image": "https://www.w3schools.com/w3images/house5.jpg"
    }
  ]);

  return (
    <div>
      <div className="w3-container w3-padding-32" id="projects">
        <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
          Projects
        </h3>
      </div>
      <div  className="w3-row-padding">
      {
        projects.map((project,index) => (
            <div key={index} className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">
                  {project.title}
                </div>
                <img
                    src={project.image}
                    alt="House"
                    style={{ width: "100%" }}
                />
              </div>
            </div>
        ))
      }
      </div>
    </div>
  );
}

export default ProjectSection;
