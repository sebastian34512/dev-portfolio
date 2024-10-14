import React from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../scss/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import { Project } from "../types/types";

interface Props {
  onHide: () => void;
  data?: Project;
}

const ProjectDetailsModal: React.FC<Props> = ({ data, onHide }) => {
  if (!data) {
    return null;
  }

  const technologies = data.technologies?.map((icon, index) => (
    <li className="list-inline-item mx-3" key={index}>
      <div className="text-center">
        <i className={icon.class} style={{ fontSize: "300%" }}>
          <p style={{ fontSize: "30%" }}>{icon.name}</p>
        </i>
      </div>
    </li>
  ));

  const images = data.images.map((image, index) => (
    <div key={index} data-src={image} />
  ));

  return (
    <Modal
      show={true}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-inside"
    >
      <span onClick={onHide} className="modal-close">
        <i className="fas fa-times fa-3x close-icon"></i>
      </span>
      <div className="col-md-12">
        <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
          <AwesomeSlider
            cssModule={AwesomeSliderStyles}
            animation="scaleOutAnimation"
            className="slider-image"
          >
            {images}
          </AwesomeSlider>
        </div>
        <div className="col-md-10 mx-auto">
          <h3 style={{ padding: "5px 5px 0 5px" }}>
            {data.title}
            {data.url && (
              <a
                href={data.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-href"
              >
                <i
                  className="fas fa-external-link-alt"
                  style={{ marginLeft: "10px" }}
                ></i>
              </a>
            )}
          </h3>
          <p className="modal-description">{data.description}</p>
          <ul className="list-inline mx-auto text-center">{technologies}</ul>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetailsModal;
