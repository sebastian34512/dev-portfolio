import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import { ResumeData } from "../types/types";
import { accentColor, secondaryColor, tertiaryColor } from "../colors";

interface Props {
  resumeBasicInfo?: ResumeData;
}

const Experience: React.FC<Props> = ({ resumeBasicInfo }) => {
  const sectionName = resumeBasicInfo?.basic_info?.section_name?.experience;

  const work = resumeBasicInfo?.experience?.map((workItem, i) => {
    const mainTech = workItem.mainTech?.map((technology, index) => (
      <Badge pill className="main-badge mr-2 mb-2" key={index}>
        {technology}
      </Badge>
    ));

    const tech = workItem.technologies?.map((technology, index) => (
      <Badge pill className="experience-badge mr-2 mb-2" key={index}>
        {technology}
      </Badge>
    ));

    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={workItem.years}
        iconStyle={{
          background: accentColor,
          color: "#fff",
          textAlign: "center",
        }}
        icon={<i className={workItem.icon + " experience-icon"}></i>}
        key={i}
      >
        <div style={{ textAlign: "left", marginBottom: "4px" }}>{mainTech}</div>
        <h3
          className="vertical-timeline-element-title"
          style={{ textAlign: "left" }}
        >
          {workItem.title}
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ textAlign: "left" }}
        >
          {workItem.company}
        </h4>
        <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
      </VerticalTimelineElement>
    );
  });

  return (
    <section id="resume" className="pb-5">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span className="text-black" style={{ textAlign: "center" }}>
              {sectionName}
            </span>
          </h1>
        </div>
      </div>
      <div className="col-md-8 mx-auto">
        <VerticalTimeline>
          {work}
          <VerticalTimelineElement
            iconStyle={{
              background: secondaryColor,
              color: "#fff",
              textAlign: "center",
            }}
            icon={
              <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
            }
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
