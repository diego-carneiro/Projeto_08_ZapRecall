import "./css/reset.css";
import "./css/styles.css";

import React, { useState } from "react";

import FrontPage from "./views/FrontPage";
import Questions from "./views/Questions";


export default function App() {

    const [switchFrontPage, setSwitchFrontPage] = useState(true);
    const [switchToEnd , setSwitchToEnd] = useState(0);
        
    return (
        <>
        {switchFrontPage ? 
            <FrontPage setSwitchFrontPage={setSwitchFrontPage}/> 
            :  
            <Questions />}

        </>

    );
}