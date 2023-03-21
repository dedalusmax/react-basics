import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return <>
        <BrowserRouter>
            <Routes>
                <Route exact path="/">
                    Home
                </Route>
                <Route path="/about">
                    About us
                </Route>
            </Routes>
        </BrowserRouter>
    </>;
}

export default App;
