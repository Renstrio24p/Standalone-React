import React from "react"
import styles from '../assets/sass/modules/app.module.scss'

export default function ReactApp() {
    return (
        <div className={styles["react-content"]}>
            <div className={styles["react-body"]}>
                <div className={styles["react-head"]}>
                    <a href="https://react.dev/"><img src="images/react.svg" className={styles.react}></img></a>
                    <div className={styles["react-text"]}>
                         <h1 className={styles["react-header"]}>Standalone React</h1>
                         <p className={styles['react-pgraph']}> 
                           <span className={styles["react-title"]}>Make your life simple and organize with </span> 
                             <img src="images/react.svg" className={styles["react-img"]}></img>
                             <span className={styles['react-js']}> React JS.</span> 
                         </p>
                         <p className={styles["react-title"]}>Webpack Version. supports Codespace</p>
                    </div>
                    <a href="https://webpack.js.org/"><img src="images/webpack.png" className={styles.webpack}></img></a>
                </div>
           <div className={styles.footer}>
             <p className={styles.version}>Version 1.0.6</p>
             <a href="https://github.com/features/codespaces/" className={styles.git}> <img src="images/github.png" className={styles.github} /> Codespaces </a>
           </div>
           </div>
        </div>
    )
}