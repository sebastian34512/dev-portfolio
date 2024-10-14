import React from "react";
import { Icon } from "@iconify/react";
import nestIcon from "@iconify/icons-logos/nestjs";
import reactIcon from "@iconify/icons-logos/react";
import flutterIcon from "@iconify/icons-logos/flutter";
import { ResumeData, SharedData } from "../types/types";

interface Props {
  sharedBasicInfo?: SharedData;
  resumeBasicInfo?: ResumeData;
}

const About: React.FC<Props> = ({ sharedBasicInfo, resumeBasicInfo }) => {
  let profilepic = sharedBasicInfo?.basic_info
    ? `images/${sharedBasicInfo.basic_info?.image}`
    : undefined;
  let sectionName = resumeBasicInfo?.basic_info
    ? resumeBasicInfo.basic_info.section_name?.about
    : "";
  let hello = resumeBasicInfo?.basic_info
    ? resumeBasicInfo.basic_info.description_header
    : "";
  let about = resumeBasicInfo?.basic_info
    ? resumeBasicInfo.basic_info.description
    : "";

  return (
    <section id="about">
      <div className="col-md-12">
        <h1 style={{ color: "black" }}>
          <span>{sectionName}</span>
        </h1>
        <div className="row center mx-auto mb-5">
          <div className="col-md-4 mb-5 center">
            <div className="polaroid">
              <span style={{ cursor: "auto" }}>
                <img
                  height="250px"
                  src={profilepic}
                  alt="Avatar placeholder"
                  style={{ objectFit: "cover" }}
                />
                <Icon
                  icon={reactIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon={flutterIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon={nestIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
              </span>
            </div>
          </div>

          <div className="col-md-8 center">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                  <span
                    className="iconify"
                    data-icon="emojione:red-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;
                  <span
                    className="iconify"
                    data-icon="twemoji:yellow-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;
                  <span
                    className="iconify"
                    data-icon="twemoji:green-circle"
                    data-inline="false"
                  ></span>
                </div>
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                >
                  <br />
                  <span className="wave">{hello} :) </span>
                  <br />
                  <br />
                  <div dangerouslySetInnerHTML={{ __html: about || "" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
