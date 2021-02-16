import React from "react";
import { useState } from "react";
import SelectSearch from "react-select-search";

import NonLiveDemoIndex from "../assets/non-live-index.svg";

import Judges from "../data/judging/judges.json";
import Projects from "../data/judging/projectData.json";
import JudgeSchedules from "../data/judging/results.json";
import ProjectSchedules from "../data/judging/projectResults.json";

const TIME_SLOTS = [
  "10:30",
  "10:40",
  "10:50",
  "11:00",
  "11:10",
  "11:20",
  "11:30",
  "11:40",
  "11:50",
];

const Judging = () => {
  const [currentPage, setCurrentPage] = useState("who-are-you");
  const [personType, setPersonType] = useState("judge");
  const [selectedPerson, setSelectedPerson] = useState("");

  const setPersonAndPage = (person) => {
    setCurrentPage("find-person");
    setPersonType(person);
  };

  const setSelectedAndPage = (e) => {
    setSelectedPerson(e);
    setCurrentPage("schedule");
  };

  const getOptions = () => {
    if (personType === "judge") {
      const res = Judges.map((j) => {
        return {
          name: j,
          value: j,
        };
      });
      return res;
    } else {
      return Projects.map((p) => {
        return {
          name: p["projectName"],
          value: p["projectName"],
        };
      });
    }
  };

  if (currentPage === "who-are-you") {
    return <WhoAreYou setPersonAndPage={setPersonAndPage} />;
  } else if (currentPage === "find-person") {
    return <FindPerson {...{ getOptions, personType, setSelectedAndPage }} />;
  } else if (currentPage === "schedule") {
    if (personType === "judge") {
      return (
        <JudgeSchedule {...{ personType, selectedPerson, setCurrentPage }} />
      );
    } else {
      return (
        <TeamSchedule {...{ personType, selectedPerson, setCurrentPage }} />
      );
    }
  }
};

const JudgingTable = ({ selectedPerson, personType }) => {
  const rows = [];

  let numProjects = 0;
  if (personType === "judge") {
    numProjects = JudgeSchedules[selectedPerson].length;
  } else {
    numProjects = ProjectSchedules[selectedPerson].length;
  }

  for (let row = 0; row < numProjects; row++) {
    const cells = [];

    const oddOrEven = row % 2 === 0 ? "even" : "odd";

    cells.push(
      <div className={`a-row time-col ${oddOrEven}`}>{TIME_SLOTS[row]}</div>
    );

    let projectName = "";
    if (personType === "judge") {
      projectName = JudgeSchedules[selectedPerson][row]["projectName"];
    } else {
      projectName = ProjectSchedules[selectedPerson][row];
    }

    if (personType === "judge") {
      cells.push(
        <div
          className={`a-row proj-col ${oddOrEven} cell${row}${
            JudgeSchedules[selectedPerson][row]["liveDemo"] ||
            projectName === "Break Time"
              ? " "
              : " non-live"
          }`}
        >
          <a
            className="proj-link"
            href={JudgeSchedules[selectedPerson][row]["videoDemoLink"]}
          >
            {" "}
            {projectName}{" "}
          </a>
        </div>
      );
    } else {
      cells.push(
        <div className={`a-row proj-col ${oddOrEven} cell${row}`}>
          {ProjectSchedules[selectedPerson][row]}
        </div>
      );
    }

    rows.push(<div className={`table-row table-row-${row}`}>{cells}</div>);
  }

  return <div className="judging__table">{rows}</div>;
};

export default Judging;

const WhoAreYou = ({ setPersonAndPage }) => {
  return (
    <div className="judging__layout">
      <p className="judging__title">Who are you?</p>
      <button
        className="judging__button"
        onClick={() => setPersonAndPage("judge")}
      >
        I am a judge
      </button>
      <button
        className="judging__button"
        onClick={() => setPersonAndPage("hacker")}
      >
        I am a hacker
      </button>
    </div>
  );
};

const FindPerson = ({ personType, getOptions, setSelectedAndPage }) => {
  return (
    <div className="judging__layout">
      <p className="judging__title">{`Welcome, ${personType}!`}</p>
      <p className="judging__subtitle">Find your name</p>
      <SelectSearch
        className="select-search"
        options={getOptions()}
        onChange={(e) => setSelectedAndPage(e)}
        search
        placeholder="Select your name"
      />
    </div>
  );
};

const JudgeSchedule = ({ selectedPerson, personType, setCurrentPage }) => {
  return (
    <div className="judging__layout--schedule">
      <p className="judging__title--schedule">{`${selectedPerson}'s Schedule`}</p>
      <button
        className="judging__button--schedule"
        onClick={() => setCurrentPage("who-are-you")}
      >
        Find Another Schedule
      </button>
      <div className="judging__non-live">
        <img
          className="judging__non-live__img"
          src={NonLiveDemoIndex}
          alt={"non-live index"}
        />
        Team is in another timezone, inspect their video link
      </div>
      <JudgingTable selectedPerson={selectedPerson} personType={personType} />
    </div>
  );
};

const TeamSchedule = ({ selectedPerson, personType, setCurrentPage }) => {
  return (
    <div className="judging__layout--schedule">
      <p className="judging__title--schedule">{`${selectedPerson}'s Schedule`}</p>
      <button
        className="judging__button--schedule"
        onClick={() => setCurrentPage("who-are-you")}
      >
        Find Another Schedule
      </button>
      <JudgingTable selectedPerson={selectedPerson} personType={personType} />
    </div>
  );
};
