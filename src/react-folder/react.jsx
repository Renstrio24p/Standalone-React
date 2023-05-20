import React from "react"

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
                         <p className="react-title">Webpack Version. supports Codespace</p>
                    </div>
                    <a href="https://webpack.js.org/"><img className='webpack'></img></a>
                </div>
           <div className="footer">
             <p className="version">Version 1.0.4</p>
             <a href="#0" className="git"> <img src="github.png" className="github" /> Codespaces </a>
           </div>
           </div>
        </div>
    )
}