import React from "react";
import { ResumeData, SharedData as shData } from "../types/types";

interface Props {
  sharedBasicInfo?: shData;
  resumeBasicInfo?: ResumeData;
}

const Skills: React.FC<Props> = ({ sharedBasicInfo, resumeBasicInfo }) => {
  let sectionName;
  let skills: JSX.Element[] | undefined = undefined;

  if (sharedBasicInfo && resumeBasicInfo) {
    sectionName = resumeBasicInfo.basic_info?.section_name?.skills;
    skills = sharedBasicInfo.skills?.icons?.map((skill, index) => (
      <li className="list-inline-item mx-3" key={index}>
        <span>
          <div className="text-center skills-tile">
            <i className={skill.class} style={{ fontSize: "220%" }}>
              <p
                className="text-center skill-name"
                style={{ fontSize: "30%", marginTop: "4px" }}
              >
                {skill.name}
              </p>
            </i>
          </div>
        </span>
      </li>
    ));
  }

  return (
    <section id="skills">
      <div className="col-md-12">
        <div className="col-md-12">
          <h1 className="section-title">
            <span className="text-white">{sectionName}</span>
          </h1>
        </div>
        <div className="col-md-12 text-center">
          <ul className="list-inline mx-auto skill-icon">{skills}</ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
