import React, { useState } from "react";

const App = () => {
  const [response, setResponse] = useState("");

  const handleClick = (e) => {
    setResponse(response.concat(e.target.value));
  };

  const clearInput = () => {
    setResponse("");
  };

  const spliceInput = () => {
    setResponse(response.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setResponse(eval(response).toString());
    } catch (err) {
      setResponse("error");
    }
  };
  const onchangeInput = () => {
    console.log("eror");
  };

  return (
    <div className="section">
      <form className="calcInput">
        <input type="text" value={response} onChange={onchangeInput} />
      </form>
      <div className="buttonGroup">
        <button className="clearClass" onClick={clearInput}>
          Clear
        </button>
        <button onClick={spliceInput}>C</button>
        <button value="*" onClick={handleClick}>
          &times;
        </button>
        <button value="9" onClick={handleClick}>
          9
        </button>
        <button value="8" onClick={handleClick}>
          8
        </button>
        <button value="7" onClick={handleClick}>
          7
        </button>
        <button value="/" onClick={handleClick}>
          &divide;
        </button>
        <button value="6" onClick={handleClick}>
          6
        </button>
        <button value="5" onClick={handleClick}>
          5
        </button>
        <button value="4" onClick={handleClick}>
          4
        </button>
        <button value="-" onClick={handleClick}>
          &ndash;
        </button>
        <button value="3" onClick={handleClick}>
          3
        </button>
        <button value="2" onClick={handleClick}>
          2
        </button>
        <button value="1" onClick={handleClick}>
          1
        </button>
        <button value="+" onClick={handleClick}>
          +
        </button>
        <button value="0" onClick={handleClick}>
          0
        </button>
        <button value="." onClick={handleClick}>
          .
        </button>
        <button className="equalClass" onClick={handleCalculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default App;
