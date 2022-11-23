import React from "react"
import "./Mainbody.css"

export default function Mainbody()  {
    return (
        <main>
            <h1 className="main--title">Fun facts about React</h1>
            <ul className="main--facts">
                <li>First released in 2013</li>
                <li>Created by Jordan Walke</li>
                <li>Has 100k+ stars on GitHub</li>
                <li>Maintained by Facebook</li>
                <li>Powers thousands of enterprise and mobile apps</li>
            </ul>
        </main>
    )
}
