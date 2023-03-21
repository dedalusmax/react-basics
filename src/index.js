import { useState } from "react";
import ReactDOM from "react-dom";
import React from "react";

function Webpage() {
    const name = "Ratko";

    return <>
    <section>
        <header>
            <h1>Hello {name}</h1>
        </header>
        <p></p>
    </section>
    <Clock />
    </>
}

function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString("HR"));

    setInterval(() => setTime(new Date().toLocaleTimeString("HR")), 1000);

    return <p>It's currently: {time}</p>
}


ReactDOM.render(<Webpage />, document.getElementById("root"));
