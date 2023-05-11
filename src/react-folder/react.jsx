import React from "react"
import './react.css';

export default function ReactApp() {
    return (
        <div className="react-content">
            <div className="react-body">
                <div className="react-head">
                    <a href="https://react.dev/"><img className='react'></img></a>
                    <div className="react-text">
                         <h1 className="react-header">Standalone React</h1>
                         <p className='react-pgraph'> 
                           <span className="react-title">Make your life simple and organize with </span> 
                             <img className="react-img"></img>
                             <span className='react-js'> React JS.</span> 
                         </p>
                             <p className="react-tutorial">click the react spinner icon to learn more about react.</p> 
                    </div>
                </div>
           <div className="footer">
              <img className="nodejs" />
              <img className="netlify" />
           </div>
           </div>
        </div>
    )
}