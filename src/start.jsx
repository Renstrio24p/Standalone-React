import React from "react";
import styles from './assets/sass/modules/app.module.scss'
import { Join } from "./assets/util/JoinClasses";

export default function Start(){
    return (
        <div className={styles['d-flex-center']}>
            <h1 className={Join([styles['dark-blue'],styles.weight,styles.pad,styles.gap20])}>
                Hello <span className={Join([styles.weight,styles.black])}>React</span>
            </h1> 
            <h2 className={Join([styles['dark-cyan'],styles.weight,styles['font-size-2_5rem']])}>18</h2>
                <img className={Join([styles['img-size-50px'],styles.react])} src="/src/assets/react.png" alt="react-logo"/>
            {/* You can now start coding right here..*/}
        </div>
    )
}
// this will serve as the APP.JS 