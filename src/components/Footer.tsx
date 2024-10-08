import React from "react";
import { SharedData } from "../types/types";

interface Props {
  sharedBasicInfo?: SharedData;
}

const Footer: React.FC<Props> = ({ sharedBasicInfo }) => {
  const networks = sharedBasicInfo?.basic_info?.social?.map((network) => (
    <span key={network.name} className="m-4">
      <a href={network.url} target="_blank" rel="noopener noreferrer">
        <i className={network.class}></i>
      </a>
    </span>
  ));

  return (
    <footer>
      <div className="col-md-12">
        <div className="social-links">{networks}</div>

        <div className="copyright py-4 text-center">
          <div className="container">
            <small>
              Copyright &copy;{" "}
              {sharedBasicInfo?.basic_info
                ? sharedBasicInfo.basic_info.name
                : "???"}
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
