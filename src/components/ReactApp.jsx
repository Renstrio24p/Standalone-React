import { useState } from "react";
import { GitImg, ReactImg, WebpackImg } from "./Images";


export default function ReactApp() {
  const [counter, setCounter] = useState(0);

  function handleCounterChange(amount) {
    setCounter((prevCount) => {
      const newCount = prevCount + amount;
      // Ensure the counter doesn't go below 0
      return newCount < 0 ? 0 : newCount;
    });
  }

  return (
    <div>
      <div className="react-div">
        <div className="logo">
          <a href="http://react.dev">
            <img src={ReactImg} className="react" alt="image" />
          </a>
        </div>
        <div>
          <h1>Standalone React</h1>
          <div className="react-div2">
            <p>Learn React </p>
            <div className="react">
              <img src={ReactImg} alt="react-img"/>
            </div>
            at
            <pre className="apps">src/Start.jsx</pre>
          </div>
          <div className="buttons">
            <button onClick={() => handleCounterChange(1)}>+1</button>
            <button>Count : <span className={counter > 0 ? "yellow" : counter < 0 ? "red" : ""}>{counter}</span></button>
            <button onClick={() => handleCounterChange(-1)}>-1</button>
          </div>
        </div>
        <div className="logo">
          <a href="http://webpack.js.org">
            <img src={WebpackImg} className="webpack" alt="" />
          </a>
        </div>
      </div>
      <div className="footer">
        <div className="version">version 1.0.6</div>
        <div className="github">
          <div className="gitlogo">
            <img src={GitImg} className="git" alt="github" />
          </div>
          <p>Codespace</p>
        </div>
      </div>
    </div>
  )
}
