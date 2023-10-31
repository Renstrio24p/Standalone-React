import { lazy } from 'react'
const ReactApp = lazy(()=>import('./components/ReactApp'))
import './assets/css/app.css'

export default function Start(){
    return (
        <div>
            <ReactApp />
            {/* You can start coding this file */}
        </div>
    )

}
