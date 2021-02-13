import React from "react";
import { useState } from "react";
import SelectSearch from "react-select-search";
import Judges from "../data/judging/judges.json";
import Projects from "../data/judging/projectData.json";
import JudgeSchedules from "../data/judging/results.json";

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
  "12:00",
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
    return (
      <div className="judging-who-are-you">
        <p className="who-are-you-title">Who are you?</p>
        <button
          className="who-are-you-button"
          onClick={() => setPersonAndPage("judge")}
        >
          I am a judge
        </button>
        <button
          className="who-are-you-button"
          onClick={() => setPersonAndPage("hacker")}
        >
          I am a hacker
        </button>
      </div>
    );
  } else if (currentPage === "find-person") {
    return (
      <div className="judging-find-person">
        <p className="welcome-title">{`Welcome, ${personType}!`}</p>
        <p className="welcome-subtitle">Find your name</p>
        <SelectSearch
          className="judging-find-dropdown"
          options={getOptions()}
          onChange={(e) => setSelectedAndPage(e)}
          search
          placeholder="Select your name"
        />
      </div>
    );
  } else if (currentPage === "schedule") {
    if (personType === "judge") {
      return (
        <div className="judging-schedule">
          <p className="schedule-title">{`${selectedPerson}'s Schedule`}</p>
          <button
            className="new-schedule-button"
            onClick={() => setCurrentPage("who-are-you")}
          >
            Find Another Schedule
          </button>
          <JudgingTable selectedPerson={selectedPerson} />
        </div>
      );
    } else {
      return <div>Project Schedule</div>;
    }
  }
};

const JudgingTable = ({ selectedPerson }) => {
  const rows = [];

  const numProjects = JudgeSchedules[selectedPerson].length;
  for (let row = 0; row < numProjects; row++) {
    const cells = [];

    const oddOrEven = row % 2 === 0 ? "even" : "odd";

    cells.push(
      <div className={`a-row time-col ${oddOrEven}`}>{TIME_SLOTS[row]}</div>
    );

    const projectName = JudgeSchedules[selectedPerson][row]["projectName"];

    cells.push(<div className={`a-row cell${row}`}>{projectName}</div>);

    rows.push(<div className={`table-row table-row-${row}`}>{cells}</div>);
  }

  return (
    <div className="schedule-container">
      <div className="schedule-table">
        <div className="schedule-body">{rows}</div>
      </div>
    </div>
  );
};

export default Judging;
