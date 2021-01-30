import React from "react";
import { useState } from "react";
import SelectSearch from "react-select-search";
import Judges from "../data/judges.json";
import Projects from "../data/projects.json";

const Judging = () => {
  const [currentPage, setCurrentPage] = useState("whoAreYou");
  const [personType, setPersonType] = useState("judge");

  const setPersonAndPage = (person) => {
    setCurrentPage("find-person");
    setPersonType(person);
  };

  const getOptions = () => {
    if (personType === "judge") {
      const res = Judges.map((j) => {
        return {
          name: j,
          value: j,
        };
      });
      console.log(res);
      return res;
    } else {
      return Projects.map((p) => {
        return {
          name: p["teamName"],
          value: p["teamName"],
        };
      });
    }
  };

  if (currentPage === "whoAreYou") {
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
          search
          placeholder="Select your name"
        />
      </div>
    );
  }
};

export default Judging;
