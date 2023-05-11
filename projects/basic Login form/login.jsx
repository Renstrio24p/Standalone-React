import React from "react";

export default function Login(){
    return (
        <div className="login">
            <form action="#" method="post">
                <h1>Login</h1>
                <input type="text" name="username" id="username" />
                <input type="password" name="password" id="password" />
            </form>
            <input type="submit" value="Login"/>
        </div>
    )
}