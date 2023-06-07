import React from "react";
import styles from './assets/sass/modules/app.module.scss'
import { Join } from "./assets/util/JoinClasses";

export default function Start(){
    return (
        <div>
            <h1 className={Join([styles.weight,styles.pad])}>
                 Hello React 
                <span className={Join([styles.fonts,styles.weight])}>
                    18
                </span>
            </h1>
            {/* You can now start coding right here..*/}
        </div>
    )
}
// this will serve as the APP.JS 