import React from 'react';

import projects from "../../Data/projects.json";
import { getimageUrl } from '../../utils';

const Projects = () => {
  return <section>
    <h2>Projects</h2>
    <div>
        {
            projects.map((project, id) => {
                return <div key={id}>
                    <img src={getimageUrl(project.imageSrc)} alt={'Image of ${project.title}'} />
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul>
                        {
                            project.skills.map((skill, id) => {
                                <li key={id}>{skill}</li>
                            })
                        }
                    </ul>
                    <a href={project.demo}>Demo</a>
                    <a href={project.source}>Source</a>
                </div>
            })
        }
    </div>
  </section>;
}

export default Projects
