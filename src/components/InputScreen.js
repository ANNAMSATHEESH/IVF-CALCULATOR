
import React, { useState } from "react";

const InputScreen = ({ onCalculate }) => {
  const [ageRange, setAgeRange] = useState("");
  const [cycles, setCycles] = useState(1);
  const [procedure, setProcedure] = useState("");
  const [conditions, setConditions] = useState([]);

  const handleConditionChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setConditions([...conditions, value]);
    } else {
      setConditions(conditions.filter((condition) => condition !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomRate = Math.floor(Math.random() * (80 - 40) + 40); // Simulated success rate
    onCalculate(randomRate, cycles);
  };

  return (
    <div className="screen">
        <h2>Which age range applies to you?</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div>
            <input
              type="radio"
              name="age"
              value="under-30"
              onChange={(e) => setAgeRange(e.target.value)}
              required
            />{"  "}
            Under 30
            <input
              type="radio"
              name="age"
              value="30-34"
              onChange={(e) => setAgeRange(e.target.value)}
            />{"  "}
            Between 30 - 34
            <input
              type="radio"
              name="age"
              value="35-40"
              onChange={(e) => setAgeRange(e.target.value)}
            />{" "}
            Between 35 - 37
            <br></br>
            <input
              type="radio"
              name="age"
              value="38-40"
              onChange={(e) => setAgeRange(e.target.value)}
            />{" "}
            Between 38 - 40
            <input
              type="radio"
              name="age"
              value="41-43"
              onChange={(e) => setAgeRange(e.target.value)}
            />{" "}
            Between 41 - 43
            <input
              type="radio"
              name="age"
              value="above 43"
              onChange={(e) => setAgeRange(e.target.value)}
            />{" "}
            Above 43
          </div>
        </div>

        <div className="form-group">
          <h3 id="h3">Number of IVF Cycles?</h3>
          <input
            type="range"
            min="1"
            max="5"
            value={cycles}
            onChange={(e) => setCycles(e.target.value)}
          />
          
        </div>
        <div className="form-group">
          <h3 id="ih3">Have you undergone these procedures before?</h3>
          <div>
                <b>ICSI Procedure:</b>
            <input
             
              type="radio"
              name="procedure"
              value="yes"
              onChange={(e) => setProcedure(e.target.value)}
              required
            />{" "}
            Yes           
            <input
              type="radio"
              name="procedure"
              value="no"
              onChange={(e) => setProcedure(e.target.value)}
            />{" "}
            No
            <b>PGT Testing:</b>
            <input
              type="radio"
              name="procedure"
              value="yes"
              onChange={(e) => setProcedure(e.target.value)}
              required
            />{" "}
            Yes  
            <input
              type="radio"
              name="procedure"
              value="no"
              onChange={(e) => setProcedure(e.target.value)}
            />{" "}
            No    
          </div>
        </div>

        <div className="form-group">
          <h3 id="ih3">Do you have any of these medical conditions?</h3>
          <div>
            <input
              type="checkbox"
              value="pcos"
              onChange={handleConditionChange}
            />{" "}
            PCOS
            <input
              type="checkbox"
              value="endometriosis"
              onChange={handleConditionChange}
            />{" "}
            Endometriosis
            <input
              type="checkbox"
              value="low-reserve"
              onChange={handleConditionChange}
            />{" "}
            Low Ovarian Reserve
            <input
              type="checkbox"
              value="male-factor"
              onChange={handleConditionChange}
            />{" "}
            Male Factor Infertility
          </div>
        </div>

        <button type="submit">Calculate</button>
      </form>
    </div>
  );
};

export default InputScreen;
