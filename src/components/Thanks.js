import React from 'react';
import Confetti from 'react-confetti'
import { useParams } from "react-router";
import TheSummit from "../assets/TheSummit.png";

const Thanks = () => {
  const { name } = useParams();
  
  return (
    <>
      <Confetti />
      <div className="thanks">
        <div className="thanks__body">
          <img className="thanks__img" src={TheSummit} alt="HBP summit"/>
          <h1>{`Thank you, ${name}!`}</h1>
          <h4>It was great having you at HackBeanpot 2021. Hope to see you again next year!</h4>
        </div>
      </div>
    </>
  )

}


export default Thanks;
