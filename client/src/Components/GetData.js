import React, { useState, useEffect } from "react";

const GoalsArray = (props) => {
  const { data } = props;

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li>
            {item.title} ( {item.content} )
          </li>
        ))}
      </ul>
    </div>
  );
};

const GetData = () => {
  const [goals, setGoals] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/api/getall")
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        console.log(data.goals);
        setGoals(data.goals);
      });
  }, []);

  return (
    <>
      {" "}
      // Tässä käytetään ns. fragmentteja, eli palautetaan tulosjoukko ilman
      ympäröivää DIV-elementtiä
      {goals ? (
        <GoalsArray goals={goals} />
      ) : (
        <div>Nothing here.Fething data...</div>
      )}
    </> // fragmenttien lopetustägi
  );
};

export default GetData;

/* ReactDOM.render(<GetData />, document.getElementById("root")); */
