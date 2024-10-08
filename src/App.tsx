import React, { useState, useEffect } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import About from "./components/About.tsx";
import Experience from "./components/Experience.tsx";
import Projects from "./components/Projects.tsx";
import Skills from "./components/Skills.tsx";
import { ResumeData, SharedData } from "./types/types.ts";

const App: React.FC = () => {
  const [resumeData, setResumeData] = useState<ResumeData>({});
  const [sharedData, setSharedData] = useState<SharedData>({});

  const loadResumeFromPath = (path: string) => {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        setResumeData(data);
      },
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  };

  const loadSharedData = () => {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        setSharedData(data);
        document.title = data.basic_info?.name || "Portfolio";
      },
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  };

  const applyPickedLanguage = (
    pickedLanguage: string,
    oppositeLangIconId: string,
  ) => {
    swapCurrentlyActiveLanguage(oppositeLangIconId);
    document.documentElement.lang = pickedLanguage;
    var resumePath =
      document.documentElement.lang === window.$primaryLanguage
        ? `res_primaryLanguage.json`
        : `res_secondaryLanguage.json`;
    loadResumeFromPath(resumePath);
  };

  const swapCurrentlyActiveLanguage = (oppositeLangIconId: string) => {
    var pickedLangIconId =
      oppositeLangIconId === window.$primaryLanguageIconId
        ? window.$secondaryLanguageIconId
        : window.$primaryLanguageIconId;
    document.getElementById(oppositeLangIconId)?.removeAttribute("filter");
    document
      .getElementById(pickedLangIconId)
      ?.setAttribute("filter", "brightness(40%)");
  };

  useEffect(() => {
    loadSharedData();
    applyPickedLanguage(
      window.$primaryLanguage,
      window.$secondaryLanguageIconId,
    );
  }, []);

  return (
    <div>
      <Header sharedData={sharedData.basic_info} />
      <div className="col-md-12 mx-auto text-center language">
        <div
          onClick={() =>
            applyPickedLanguage(
              window.$primaryLanguage,
              window.$secondaryLanguageIconId,
            )
          }
          style={{ display: "inline" }}
        >
          <span
            className="iconify language-icon mr-5"
            data-icon="twemoji-flag-for-flag-united-kingdom"
            data-inline="false"
            id={window.$primaryLanguageIconId}
          ></span>
        </div>
        <div
          onClick={() =>
            applyPickedLanguage(
              window.$secondaryLanguage,
              window.$primaryLanguageIconId,
            )
          }
          style={{ display: "inline" }}
        >
          <span
            className="iconify language-icon"
            data-icon="twemoji-flag-for-flag-poland"
            data-inline="false"
            id={window.$secondaryLanguageIconId}
          ></span>
        </div>
      </div>
      <About resumeBasicInfo={resumeData} sharedBasicInfo={sharedData} />
      <Projects resumeBasicInfo={resumeData} />
      <Skills sharedBasicInfo={sharedData} resumeBasicInfo={resumeData} />
      <Experience resumeBasicInfo={resumeData} />
      <Footer sharedBasicInfo={sharedData} />
    </div>
  );
};

export default App;
