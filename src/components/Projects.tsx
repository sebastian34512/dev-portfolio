import React, { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import { Project, ResumeData } from "../types/types";

interface Props {
  resumeBasicInfo?: ResumeData;
}

const Projects: React.FC<Props> = ({ resumeBasicInfo }) => {
  const [detailsModalShow, setDetailsModalShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(
    undefined,
  );

  const detailsModalShowHandler = (data: Project) => {
    setDetailsModalShow(true);
    setSelectedProject(data);
  };

  const detailsModalCloseHandler = () => {
    setDetailsModalShow(false);
  };

  const sectionName = resumeBasicInfo?.basic_info?.section_name?.projects;
  const projects = resumeBasicInfo?.projects?.map((project, index) => (
    <div
      className="col-sm-12 col-md-6 col-lg-4"
      key={index}
      style={{ cursor: "pointer" }}
    >
      <span className="portfolio-item d-block">
        <div className="foto" onClick={() => detailsModalShowHandler(project)}>
          <div>
            <img
              src={project.images[0]}
              alt="project"
              height="230"
              style={{
                marginBottom: 0,
                paddingBottom: 0,
                position: "relative",
              }}
            />
            <span className="project-date">{project.startDate}</span>
            <p className="project-title-settings mt-3">{project.title}</p>
          </div>
        </div>
      </span>
    </div>
  ));

  return (
    <section id="portfolio">
      <div className="col-md-12">
        <h1 className="section-title" style={{ color: "black" }}>
          <span>{sectionName}</span>
        </h1>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto">{projects}</div>
        </div>
        {detailsModalShow && (
          <ProjectDetailsModal
            onHide={detailsModalCloseHandler}
            data={selectedProject}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
