import {React, useState} from "react";
import '../styles/Main.css';

const Main = () => {
    return (
        <span className="body">
            <ul className="jobs">
                <li className="space">All Jobs</li>
                <li className="space">Open Jobs</li>
                <li className="space">Closed Jobs</li>
                <li className="space">Draft Jobs</li>
            </ul>
        </span>
    )
}

export default Main;