import React, { useState, useEffect } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import { BasicInfo } from "../types/types";
import { secondaryColor, tertiaryColor } from "../colors";

interface Props {
  sharedData?: BasicInfo;
}

const Header: React.FC<Props> = ({ sharedData }) => {
  const [checked, setChecked] = useState(false);
  const [titles, setTitles] = useState<(string | number)[]>([]);
  const [name, setName] = useState<string | undefined>("");

  useEffect(() => {
    if (sharedData) {
      setName(sharedData.name);
      const formattedTitles = sharedData.titles
        ?.map((x) => [x.toString().toUpperCase(), 1500])
        .flat();
      setTitles(formattedTitles || []);
    }
  }, [sharedData]);

  const onThemeSwitchChange = (checked: boolean) => {
    setChecked(checked);
    setTheme();
  };

  const setTheme = () => {
    const dataThemeAttribute = "data-theme";
    const body = document.body;
    const newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  };

  const HeaderTitleTypeAnimation = React.memo(() => (
    <div className="title-styles">
      <Typical steps={titles} loop={50} />
    </div>
  ));

  return (
    <header
      id="home"
      style={{ height: window.innerHeight - 140, display: "block" }}
    >
      <div className="row aligner" style={{ height: "100%" }}>
        <div className="col-md-12">
          <div>
            <img
              src="images/Logo.svg"
              alt="Logo"
              className="logo"
              style={{ marginBottom: "2em" }}
            />
            <br />
            <h1 className="mb-0">
              <Typical steps={[name || ""]} wrapper="p" />
            </h1>
            <div className="title-container">
              <HeaderTitleTypeAnimation />
            </div>
            <Switch
              checked={checked}
              onChange={onThemeSwitchChange}
              offColor={secondaryColor}
              onColor={tertiaryColor}
              className="react-switch mx-auto"
              width={90}
              height={40}
              uncheckedIcon={
                <span
                  className="iconify"
                  data-icon="twemoji:owl"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "20px",
                    color: "#353239",
                  }}
                ></span>
              }
              checkedIcon={
                <span
                  className="iconify"
                  data-icon="noto-v1:sun-with-face"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "10px",
                    color: "#353239",
                  }}
                ></span>
              }
              id="icon-switch"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
