import ReactDOM from "react-dom";
import React from "react";

function Webpage() {
    const name = "Ratko";
    const date = new Date();

    return <>
    <section>
        <header>
            <h1>Hello {name}</h1>
        </header>
        <p></p>
    </section>
    <Clock time={date} />
    </>
}

function Clock(props) {
    return <p>It's currently: {props.time.toLocaleTimeString("HR")}</p>
}


ReactDOM.render(<Webpage />, document.getElementById("root"));
